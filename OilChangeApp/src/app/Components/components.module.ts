import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

// import { SharedModule } from 'src/app/shared/shared.module';
import { UsersComponent } from './users/users.component';

@NgModule({
    declarations: [
      UsersComponent,
    ],
    imports: [
      CommonModule,
      IonicModule,
    ],
    exports: [
        UsersComponent,
    ],
  })
  export class ComponentsModule { }