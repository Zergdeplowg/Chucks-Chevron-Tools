import { Component } from '@angular/core';
import { NetworkService } from './Services/network.service';
import { PrinterService } from './Services/printer.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private network: NetworkService, private printService: PrinterService) {}

  async testGetCheckInSheet(){
    this.network.getCheckInSheet().then((response) => {
      console.log("Get Check In Sheet Data: ", response.data);
    });
  }

  printBlankCheckIn(){
    this.printService.printBlankCheckInSheet();
  }
}
