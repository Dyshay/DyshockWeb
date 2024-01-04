import {Component, Input} from '@angular/core';
import {Server} from "../../models/server.model";
import {Clipboard, ClipboardModule} from "@angular/cdk/clipboard";

@Component({
  selector: 'app-server-card',
  standalone: true,
  imports: [ClipboardModule],
  templateUrl: './server-card.component.html',
  styleUrl: './server-card.component.css'
})
export class ServerCardComponent {
  @Input()
  server: Server | undefined

  constructor(private clipBoard: Clipboard) {
  }

  copyServer() {
    this.clipBoard.copy(`connect ${this.server?.ip}`)
  }

  connectServer() {
    window.open(`steam://connect/${this.server?.ip}`)
  }
}
