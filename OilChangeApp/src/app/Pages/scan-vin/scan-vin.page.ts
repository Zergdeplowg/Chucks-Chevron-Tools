import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { VehicleService } from 'src/app/Services/vehicle.service';

@Component({
  selector: 'app-scan-vin',
  templateUrl: './scan-vin.page.html',
  styleUrls: ['./scan-vin.page.scss'],
})
export class ScanVinPage implements OnInit {

  constructor(
    public nav: Router,
    public veh: VehicleService,
    public alert: AlertController
  ) { }

  ngOnInit() {
  }

  goHome(){
    this.nav.navigate(['/home'], {replaceUrl: true});
  }

  async submit(
    hat: string | number | undefined | null,
    vin: string | number | undefined | null,
    milage: string | number | undefined | null,
    license: string | number | undefined | null,
    state: string | number | undefined | null
    ){
      console.log("Hat: ", hat, " Vin: ", vin, " Milage: ", milage, " License: ", license, " State: ", state);
      if(hat)
        this.veh.setHat(hat.toString());
      else {
        this.alert.create({header: "Missing Data", subHeader: "You must enter a value for the hat", message: "Enter WO if the vehicle is without a hat."}).then((al) => al.present());
        return
      }
      if(vin)
        await this.veh.setVehicleData(vin.toString())
      else {
        this.alert.create({header: "Missing Data", subHeader: "You must enter a value for the vin", message: "Enter WO if the vehicle is without a vin."}).then((al) => al.present());
        return
      }
      if(license && state)
        this.veh.setLicenseNumber(license.toString(), state.toString());
      else {
        this.alert.create({header: "Missing Data", subHeader: "You must enter a value for the license and state", message: "Enter NA if vehicle doesn't have a plate"}).then((al) => al.present());
        return
      }
      if(milage)
        this.veh.setMileage(milage.toString());
      else {
        this.alert.create({header: "Missing Data", subHeader: "You must enter a value for the miles", message: "Enter WO if unable to get miles."}).then((al) => al.present());
        return
      }
      this.veh.checkInVehicle();
      this.goHome()
    }

}
