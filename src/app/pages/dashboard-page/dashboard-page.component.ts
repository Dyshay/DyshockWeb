import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "../../shared/components/navbar/navbar.component";
import {SidebarComponent} from "../../shared/components/sidebar/sidebar.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {AdvertissementComponent} from "../../shared/components/advertissement/advertissement.component";
import {ServerCardComponent} from "../../shared/components/server-card/server-card.component";
import {ChatMessagesComponent} from "../../shared/components/chat-messages/chat-messages.component";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {OidcSecurityService} from "angular-auth-oidc-client";
import {ServerService} from "../../shared/services/server.service";
import {Observable} from "rxjs";
import {Server} from "../../shared/models/server.model";
import {RouterOutlet} from "@angular/router";

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
    CommonModule,
    HttpClientModule,
    RouterOutlet
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {

  isChatEnabled = false
}
