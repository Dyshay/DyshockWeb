import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgIf} from "@angular/common";
import {
  AuthenticatedResult,
  OidcClientNotification,
  OidcSecurityService, OpenIdConfiguration,
  UserDataResult
} from "angular-auth-oidc-client";
import {filter, flatMap, map, Observable, of, switchMap, take, tap} from "rxjs";
import {UserService} from "../../services/user.service";
import {HttpHeaders} from "@angular/common/http";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-steam-account',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe
  ],
  templateUrl: './steam-account.component.html',
  styleUrl: './steam-account.component.css'
})
export class SteamAccountComponent implements OnInit {

  configuration$: Observable<OpenIdConfiguration> | undefined;
  userDataChanged$: Observable<OidcClientNotification<any>> | undefined;
  userData$: Observable<UserDataResult> | undefined;
  isAuthenticated = false;
  headers: any

  user$: Observable<User> | undefined

  constructor(private oidcSecurityService: OidcSecurityService, public userService: UserService) {

  }

  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe();

    this.configuration$ = this.oidcSecurityService.getConfiguration();
    this.userData$ = this.oidcSecurityService.userData$;

    this.oidcSecurityService.isAuthenticated$.subscribe(({isAuthenticated}) => {
      this.isAuthenticated = isAuthenticated;
    });

    this.user$ = this.oidcSecurityService.isAuthenticated$.pipe(
      filter((isAuth) => !!isAuth),
      switchMap(() => this.userService.fetchMe())
    )
  }

  public connect() {
    this.oidcSecurityService.authorize()
  }

  public disconnect() {
    this.oidcSecurityService.logoffLocal()
  }

  public test() {
    this.userData$?.pipe(
      filter((userData) => !!userData.userData),
      switchMap((userData) => {
        return this.userService.fetchMe()
      })
    ).subscribe()
  }
}
