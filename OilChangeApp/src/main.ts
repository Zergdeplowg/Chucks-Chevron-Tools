import { APP_INITIALIZER, enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppModule } from './app/app.module';
import { InitializeAppService } from './app/Services/initialize-app.service';
import { environment } from './environments/environment';
import { SQLiteService } from './app/Services/sqlite.service';
import { StorageService } from './app/Services/storage.service';
import { DbnameVersionService } from './app/Services/dbname-version.service';
import { provideRouter, RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

// Define the APP_INITIALIZER factory
export function initializeFactory(init: InitializeAppService) {
  return () => init.initializeApp();
}

// bootstrapApplication(AppComponent, {
//   providers: [SQLiteService,
//       InitializeAppService,
//       StorageService,
//       DbnameVersionService,
//       {
//       provide: APP_INITIALIZER,
//       useFactory: initializeFactory,
//       deps: [InitializeAppService],
//       multi: true
//       }
//   ],
// });