import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { NetworkService } from './network.service';
@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  vehicle?: Vehicle;
  vehicleHasData: boolean = false;

  constructor(public network: NetworkService) { }
  
  async setVehicleData(vin?: string, license?: string){
    if(vin !== undefined){
      await this.network.getDataFromVin(vin).then((results) => {
        const data: Array<{Value: string, ValueId: string, Variable: string, VariableId: number}> = results.data["Results"];
        this.vehicle = {
          vin: vin,
          license: "ABC123",
          state: "WA",
          make: data.find(element => element.Variable === "Make")?.Value || "",
          model: data.find(element => element.Variable === "Model")?.Value || "",
          trim: data.find(element => element.Variable === "Trim")?.Value || "",
          year: data.find(element => element.Variable === "Model Year")?.Value || "",
          cylinders: data.find(element => element.Variable === "Engine Number of Cylinders")?.Value || "",
          size: data.find(element => element.Variable === "Displacement (L)")?.Value || "",
          type: data.find(element => element.Variable === "Fuel Type - Primary")?.Value || "",
          drive: data.find(element => element.Variable === "Drive Type")?.Value || "",
          body: data.find(element => element.Variable === "Body Class")?.Value || "",
          miles: "123456",
          oiltype: "5W30",
          oilcap: "5.0qt",
        }
        this.vehicleHasData = true;
      });
    }
  }
  
}
