import { Injectable } from '@angular/core';
import {Printer} from '@bcyesil/capacitor-plugin-printer'
import { Capacitor } from '@capacitor/core';
import { Vehicle } from '../models/vehicle';
import { NetworkService } from './network.service';
import { VehicleService } from './vehicle.service';


@Injectable({
  providedIn: 'root'
})
export class PrinterService {

  constructor(public vehicle: VehicleService, public network: NetworkService) { }

  // async testPrint(){
  //   let printContent: string = this.setPrintContent();
  //   console.log("Print Content:", printContent)
  //   Printer.print({content: printContent});
  // }

  async printBlankCheckInSheet(){
    let response = await this.network.getCheckInSheet();
    let date: Date = new Date();
    let data: string  = response.data;
    console.log("Date:", date.toDateString());
    // data = data.replace("{{DATE_IN}}", date.toLocaleDateString("en-US"));
    
    data = data.replace("{{DATE_IN}}", "____/____/____");
    while(/{{\D*}}/.test(data)){
      data = data.replace(/{{\w*}}/, "");
    }
    console.log("data after replacing: ", data);
    if(Capacitor.getPlatform() === "web"){
      let myDocument = window.open('', 'PRINT')
      myDocument?.document.write(data);
      setTimeout(() => {
          
        myDocument?.print()
        myDocument?.close()
      }, 10);
    } else {
      Printer.print({content: data})
    }
  }

  // setPrintContent(): string{
  //   let date: Date = new Date();
    
  //   let c = ;
  //   if (this.vehicle.vehicle === undefined) {return ""}
  //   let veh: {[key: string]: string} = this.vehicle.vehicle;
  //   c = c.replace("{{HAT-TYPE}}", "WO")
  //   c = c.replace("{{HAT-NUMBER}}", "Waiting")
  //   c = c.replace("{{DATE}}", date.toDateString())
  //   c = c.replace("{{YEAR}}", veh["year"]);
  //   c = c.replace("{{MAKE}}", veh["make"]);
  //   c = c.replace("{{MODEL}}", veh["model"] + " " + veh["trim"]);
  //   c = c.replace("{{LICENSE}}", "(" + veh["state"] + ")" + veh["license"]);
  //   c = c.replace("{{PROD}}", "05/04");
  //   c = c.replace("{{DRIVE}}", veh["drive"]);
  //   c = c.replace("{{MILES}}", veh["miles"]);
  //   c = c.replace("{{VIN}}", veh["vin"].toUpperCase());
  //   c = c.replace("{{SIZE}}", veh["size"]);
  //   c = c.replace("{{TRANSMISSION}}", "STAND");
  //   console.log(c);

  //   return c
  // }
}
