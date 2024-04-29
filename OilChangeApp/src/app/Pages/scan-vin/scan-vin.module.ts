import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanVinPageRoutingModule } from './scan-vin-routing.module';

import { ScanVinPage } from './scan-vin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanVinPageRoutingModule
  ],
  declarations: [ScanVinPage]
})
export class ScanVinPageModule {}
