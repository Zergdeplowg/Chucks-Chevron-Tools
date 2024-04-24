import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor() { }

  async getDataFromVin(vin: string){
    // const options: HttpOptions = {
    //   url: "https://www.pgfilters.com/wp-content/themes/astra/includes/custom_pages/vinSearch.php",
    //   params: {searchvin: "3d7ku28d54g177036"}
    // }

    // const options2: HttpOptions = {
    //   url: "https://www.pgfilters.com/wp-content/themes/astra/includes/custom_pages/qualiapplication.php",
    //   params: {
    //     engine: "1880",
    //     engineval: "5.7L",
    //     bvid: "17862",
    //     makeval: "Dodge",
    //     modelval: "Ram 2500",
    //     year: "2004",
    //     vinflag: "1",
    //     vinsearchTerm: "3d7ku28d54g177036",
    //     active_tab_id: "",
    //     partsubtype: "",
    //   }
    // }
    const opts: HttpOptions ={
      url: 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/' + vin,
      params: {format: "json"}
    }
    // console.log("Post Options:", options);
    // this.client.post("https://www.pgfilters.com/wp-content/themes/astra/includes/custom_pages/vinSearch.php",{}, {params: {searchvin: "3d7ku28d54g177036"}}).subscribe()
    // return this.client.get('https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/3d7ku28d54g177036', {params: {format: "JSON"}}).subscribe()
    return CapacitorHttp.get(opts);
  }
}
