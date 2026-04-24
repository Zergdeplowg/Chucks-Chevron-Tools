import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/Services/network.service';
import { WebsocketService } from 'src/app/Services/websocket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  readyToPrint: boolean = false;

  constructor(
    public websocket: WebsocketService,
    public network: NetworkService
  ) { }

  ngOnInit() {
  }

  sendMessage(){
    this.websocket.sendMessage("Hello World");
  }

  getData(){
    this.network.getCurrentlyOnline().then((response) => {
      console.log("Current User IDs: ", response)
    })
  }

}
