import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { NetworkService } from '../Services/network.service';
import { Browser, OpenOptions } from '@capacitor/browser';
import { Clipboard, WriteOptions } from '@capacitor/clipboard';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public vin: string = "3d7ku28d54g177036"
  private activatedRoute = inject(ActivatedRoute);
  constructor(public network: NetworkService, public nav: Router) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  doVinSearch(){
    this.network.getDataFromVin(this.vin).then((response) => {
      console.log(response)
      // const results: Array<{Value: string, ValueId: string, Variable: string, VariableId: number}> = response.data['Results']
      // console.log(results)
      // const Make = results.find(element => element.Variable === "Make");
      // const Model = results.find(element => element.Variable === "Model");
      // const Year = results.find(element => element.Variable === "Model Year")
      // const Trim = results.find(element => element.Variable === "Trim")
      // const Cylinders = results.find(element => element.Variable === "Engine Number of Cylinders")
      // const Size = results.find(element => element.Variable === "Displacement (L)")
      // const Type = results.find(element => element.Variable === "Fuel Type - Primary")
      // const Drive = results.find(element => element.Variable === "Drive Type")
      // const Body = results.find(element => element.Variable === "Body Class")
      // console.log(
      //   Year?.Value,
      //   Make?.Value,
      //   Model?.Value,
      //   Trim?.Value,
      //   Cylinders?.Value !== undefined ? "V" +Cylinders.Value: "",
      //   Size?.Value + "L",
      //   Type?.Value,
      //   Drive?.Value,
      //   Body?.Value
      // );
      let wo: WriteOptions = {string: this.vin};
      Clipboard.write(wo);
      // let options: OpenOptions = {url: "https://www.pgfilters.com/product-catalog/"};
      // Browser.open(options);
      this.nav.navigate(["/select-filters/"+this.vin])
    });
  }
}
