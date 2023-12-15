import {Component, signal} from '@angular/core';
import {LinksComponent} from "../links/links.component";
import {SteamAccountComponent} from "../steam-account/steam-account.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    LinksComponent,
    SteamAccountComponent,
    NgClass
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMobileVisible = false

  setMobileVisible(){
    this.isMobileVisible = !this.isMobileVisible
  }

}
