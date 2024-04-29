import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanVinPage } from './scan-vin.page';

const routes: Routes = [
  {
    path: '',
    component: ScanVinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanVinPageRoutingModule {}
