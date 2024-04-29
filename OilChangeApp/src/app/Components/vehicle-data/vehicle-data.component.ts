import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-vehicle-data',
  templateUrl: './vehicle-data.component.html',
  styleUrls: ['./vehicle-data.component.scss'],
})
export class VehicleDataComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}


  submit(year: any, make:any, model: any){
    return this.modalCtrl.dismiss({year: year, make: make, model: model})
  }

}
