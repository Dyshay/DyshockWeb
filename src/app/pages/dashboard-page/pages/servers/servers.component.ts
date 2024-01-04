import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {Server} from "../../../../shared/models/server.model";
import {ServerService} from "../../../../shared/services/server.service";
import {ServerCardComponent} from "../../../../shared/components/server-card/server-card.component";
import {AsyncPipe} from "@angular/common";
import {ServersHubService} from "../../../../shared/services/servers-hub.service";

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [
    ServerCardComponent,
    AsyncPipe
  ],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  servers$: Observable<Server[]> = this.serverHub.servers$.pipe(
    map(servers => {
      return servers.map(server => {
        return { ...server, name: server.name.substring(13)}
      })
    })
  )
  constructor(private serverHub: ServersHubService) {
  }


}
