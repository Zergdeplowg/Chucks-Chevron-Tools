import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectFiltersPageRoutingModule } from './select-filters-routing.module';

import { SelectFiltersPage } from './select-filters.page';
import { ComponentsModule } from 'src/app/Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectFiltersPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SelectFiltersPage]
})
export class SelectFiltersPageModule {}
