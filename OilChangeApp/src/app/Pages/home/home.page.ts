import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/Services/network.service';
import { PrinterService } from 'src/app/Services/printer.service';
import { VehicleService } from 'src/app/Services/vehicle.service';
import { WebsocketService } from 'src/app/Services/websocket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  readyToPrint: boolean = false;

  constructor(
    public printer: PrinterService,
    public vehicleService: VehicleService,
    public websocket: WebsocketService,
    public network: NetworkService
  ) { }

  ngOnInit() {
    this.setVehInfo();
  }

  // testPrint(){
  //   this.printer.testPrint();
  // }

  setVehInfo(){
    this.vehicleService.setVehicleData("3d7ku28d54g177036").then(() => this.readyToPrint = this.vehicleService.vehicleHasData);
  }

  sendMessage(){
    this.websocket.sendMessage("Hello World");
  }

  getData(){
    this.network.getCurrentlyOnline().then((response) => {
      console.log("Current User IDs: ", response)
    })
  }
  checkin(hat: string | number | undefined | null){
    console.log("Hat: ", hat)
    if(hat === null || hat === undefined){
      return;
    }
    else{
      this.vehicleService.setHat(hat.toString());
      this.vehicleService.checkInVehicle();
    }
  }

  remove(vin: string | number | undefined | null){
    console.log("vin: ", vin)
    if(vin === null || vin === undefined){
      return;
    }
    else{
      this.network.removeVehicle(vin.toString());
    }
  }

}
