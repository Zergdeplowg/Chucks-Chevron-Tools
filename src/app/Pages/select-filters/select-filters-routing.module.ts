import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectFiltersPage } from './select-filters.page';

const routes: Routes = [
  {
    path: '',
    component: SelectFiltersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectFiltersPageRoutingModule {}
