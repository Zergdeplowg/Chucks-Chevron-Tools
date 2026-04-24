import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class InitializeAppService {
  isAppInit: boolean = false;
  platform!: string;

  constructor(
      private webSocket: WebsocketService,
      ) {

  }

  async initializeApp() {
    await this.webSocket.init();
    
  }
}
