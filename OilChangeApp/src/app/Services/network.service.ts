import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';
import { environment } from 'src/environments/environment';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor() { }

  apiURL = environment.api_url;

  

  async getCurrentlyOnline(){
    const opts: HttpOptions ={ url: this.apiURL +"users"}
    return CapacitorHttp.get(opts);
  }

  async getUpdate(){
    const opts: HttpOptions ={ url: this.apiURL + "update"}
    return CapacitorHttp.get(opts);
  }
}
