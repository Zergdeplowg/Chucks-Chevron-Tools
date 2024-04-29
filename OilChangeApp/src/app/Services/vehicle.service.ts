import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VehicleDataComponent } from '../Components/vehicle-data/vehicle-data.component';
import { Vehicle } from '../models/vehicle';
import { NetworkService } from './network.service';
import { WebsocketService } from './websocket.service';
@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  vehicle: {[key:string]: string} = {};
  hat: string = "";
  vehicleHasData: boolean = false;

  vehicles : {[key:string]: {[key:string]: string}} = {};
  vehicleKeys: string[] = [];

  constructor(public network: NetworkService, public modalCtrl: ModalController, public websocket: WebsocketService) {
  }

  init(){
    this.network.getUpdate().then((response) =>{
      this.vehicles = response.data as {[key:string]: {[key: string]: string}};
      this.vehicleKeys = Object.keys(this.vehicles);
      console.log("vehicles: ", this.vehicles);
      this.websocket.updateSubscription().subscribe((data: {[key:string]: {[key: string]: string}}) => {
        this.vehicles = data;
        this.vehicleKeys = Object.keys(this.vehicles);
      });
    });
  }
  
  async setVehicleData(vin?: string){
    if(vin !== undefined){
      await this.network.getDataFromVin(vin).then(async (results) => {
        const data: Array<{Value: string, ValueId: string, Variable: string, VariableId: number}> = results.data["Results"];
        this.vehicle = {
          vin: vin,
          make: data.find(element => element.Variable === "Make")?.Value || "",
          model: data.find(element => element.Variable === "Model")?.Value || "",
          trim: data.find(element => element.Variable === "Trim")?.Value || "",
          year: data.find(element => element.Variable === "Model Year")?.Value || "",
          cylinders: data.find(element => element.Variable === "Engine Number of Cylinders")?.Value || "",
          size: data.find(element => element.Variable === "Displacement (L)")?.Value || "",
          type: data.find(element => element.Variable === "Fuel Type - Primary")?.Value || "",
          drive: data.find(element => element.Variable === "Drive Type")?.Value || "",
          body: data.find(element => element.Variable === "Body Class")?.Value || "",
        }
        if(this.vehicle["year"] === "" || this.vehicle["make"] === "" || this.vehicle["model"] === ""){
          const modal = await this.modalCtrl.create({component: VehicleDataComponent})
          modal.present();
          const {data, role} = await modal.onWillDismiss();
          console.log("data: ", data);
          this.vehicle["year"] = data["year"];
          this.vehicle["make"] = data["make"];
          this.vehicle["model"] = data["model"];
        }

        Object.keys(this.vehicle).forEach((key) => {
          this.vehicle[key] = this.vehicle[key].toUpperCase();
        })
        this.vehicleHasData = true;

      });
    }
  }

  setLicenseNumber(license: string, state: string){
    if(this.vehicle) {
      this.vehicle["license"] = license;
      this.vehicle["state"] = state;
    }
  }

  setMileage(mileage: string){
    if(this.vehicle)
      this.vehicle["mileage"] = mileage;
  }

  setHat(hat: string){
    this.hat = hat;
  }

  async checkInVehicle(){
    if(this.vehicle){
      this.vehicle["hat"] = this.hat;
      this.network.checkInVehicle(this.vehicle);
    }
  }
  
}
