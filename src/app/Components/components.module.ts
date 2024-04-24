import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

// import { SharedModule } from 'src/app/shared/shared.module';
import { FilterBrowserComponent } from './filter-browser/filter-browser.component';
import { UsersComponent } from './users/users.component';

@NgModule({
    declarations: [
      FilterBrowserComponent,
      UsersComponent
    ],
    imports: [
      CommonModule,
      IonicModule,
    ],
    exports: [
        FilterBrowserComponent,
        UsersComponent
    ],
  })
  export class ComponentsModule { }