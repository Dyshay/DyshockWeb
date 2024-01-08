import {Component, Input} from '@angular/core';
import {Server} from "../../models/server.model";
import {Clipboard, ClipboardModule} from "@angular/cdk/clipboard";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'app-server-card',
  standalone: true,
  imports: [ClipboardModule, CommonModule, NgOptimizedImage],
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

  getImageFromMap(currentMap: string) {
    switch (currentMap) {
      case 'aim_redline_rp':
        return 'assets/maps/akredline.png';
      case 'de_inferno':
        return 'assets/maps/inferno.png'
      case 'de_dust2':
        return 'assets/maps/d2.png'
      default:
        return 'assets/maps/notfound.png'
    }

  }
}
