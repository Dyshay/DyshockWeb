import { Component } from '@angular/core';
import {NavbarComponent} from "../../shared/components/navbar/navbar.component";
import {SidebarComponent} from "../../shared/components/sidebar/sidebar.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {AdvertissementComponent} from "../../shared/components/advertissement/advertissement.component";
import {ServerCardComponent} from "../../shared/server-card/server-card.component";
import {ChatMessagesComponent} from "../../shared/components/chat-messages/chat-messages.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AdvertissementComponent,
    ServerCardComponent,
    ChatMessagesComponent,
    CommonModule
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {

  isChatEnabled = false
}
