import { Component, OnInit } from '@angular/core';
import { PrinterService } from 'src/app/Services/printer.service';
import { VehicleService } from 'src/app/Services/vehicle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  readyToPrint: boolean = false;

  constructor(public printer: PrinterService, public vehicleService: VehicleService) { }

  ngOnInit() {
    this.setVehInfo();
  }

  testPrint(){
    this.printer.testPrint();
  }

  setVehInfo(){
    this.vehicleService.setVehicleData("3d7ku28d54g177036").then(() => this.readyToPrint = this.vehicleService.vehicleHasData);
  }

}
