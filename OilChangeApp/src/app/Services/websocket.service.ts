import { Injectable } from '@angular/core';
import { OnCloseData, OnErrorData, OnMessageData, OnOpenData, WebSocket } from '@wahr/capacitor-websocket-client';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private socket: Socket) {
  }

  connected: boolean = false;

  async init(){
    // console.log("Starting Websocket!")
    // await WebSocket.onOpen({}, this.onOpen);
    // await WebSocket.onMessage({}, this.onMessage);
    // await WebSocket.connect({url: "ws://192.168.0.90:5000"})
    // setTimeout(async () => {
    //   await WebSocket.send({data: "hello world!"})
    // }, 2000);
    this.socket.connect();

    this.socket.on('connect', this.onConnect);

    this.socket.on('response',(data: string | null) => {
      console.log("response data: ", data);
      this.onResponse(data)
    });
    this.socket.on('message', this.onMessage);
    this.socket.on('close', this.onClose);
    this.socket.on('update', this.onUpdate);
  }


  // Send data
  sendMessage(message: string) {
    this.socket.emit('message', message);
  }

  sendJson(data: {}){
    this.socket.emit("json", data)
  }

  // Receive data

  onMessage(message: string | any){
    console.log("OnMessage message: ", message);
  }

  onResponse(message: any | null){
    console.log('Server says: ' + message);
  }

  onError(message: string | null){
    console.log("OnError message: ", message);
  }

  onJson(data: {}){
    console.log("Received JSON: ", data);
  }

  onUpdate(data: {}){
    console.log("Update: ", data)
  }

  updateSubscription(){
    let subscription = this.socket.fromEvent("update") as Observable<{[key: string]: {[key: string]: string}}>;
    console.log("Subscribing to update: ", this.socket.listeners("update"));
    return subscription;
  }

  // Connection
  onClose(message: string | null){
    this.connected = false;
    console.log("OnClose message: ", message);
  }

  onConnect(data: any | null){
    this.connected = true;
    console.log("Connected to the Server!", data);
  }
}
