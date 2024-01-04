import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";
import {AuthModule, LogLevel} from "angular-auth-oidc-client";
import {ApiInterceptorService} from "./shared/services/api-interceptor.service";
import {environment} from "../environments/environment";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule), importProvidersFrom(JwtHelperService),
    importProvidersFrom(AuthModule.forRoot({
      config: {
        authority: environment.apiUrl,
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: 'dyshock_web',
        scope: 'openid',
        responseType: 'code',
        silentRenew: false,
        renewTimeBeforeTokenExpiresInSeconds: 10,
        autoUserInfo: false,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
        ignoreNonceAfterRefresh: true
      },
    })), {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorService, multi: true},],
};
