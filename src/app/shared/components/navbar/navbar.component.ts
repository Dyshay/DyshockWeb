import { Component } from '@angular/core';
import {LinksComponent} from "../links/links.component";
import {SteamAccountComponent} from "../steam-account/steam-account.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    LinksComponent,
    SteamAccountComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
