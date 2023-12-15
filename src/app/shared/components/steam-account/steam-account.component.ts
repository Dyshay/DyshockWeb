import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-steam-account',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './steam-account.component.html',
  styleUrl: './steam-account.component.css'
})
export class SteamAccountComponent {
  isConnected = false
}
