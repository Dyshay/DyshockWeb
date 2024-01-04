import {Injectable} from '@angular/core';
import {HttpTransportType, HubConnection, HubConnectionBuilder, LogLevel} from "@microsoft/signalr";
import {environment} from "../../../environments/environment";
import {BehaviorSubject, ReplaySubject} from "rxjs";
import {Server} from "../models/server.model";

@Injectable({
  providedIn: 'root'
})
export class ServersHubService {
  public servers$: BehaviorSubject<Server[]> = new BehaviorSubject<Server[]>([])

  private hubConnection: HubConnection

  constructor() {
    this.startConnection()
    this.startFetchServers();
  }

  public startConnection = () => {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(`${environment.apiUrl}/ws`, {skipNegotiation: true, transport: HttpTransportType.WebSockets})
      .withAutomaticReconnect()
      .configureLogging(LogLevel.None)
      .build();
    this.hubConnection
      .start()
      .catch(err => {
        console.log('Error while starting connection:', err);
        setTimeout(() => {
          this.startConnection();
        }, 5000);
      });
  }

  public startFetchServers = () => {
    this.hubConnection.on('fetchServers', (data: Server[]) => {
      this.servers$.next(data)
    });
  }
}
