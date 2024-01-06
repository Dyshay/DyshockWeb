import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {UserStats} from "../models/user-stats.model";

@Injectable({
  providedIn: 'root'
})
export class UserStatsService {

  constructor(private httpClient: HttpClient) { }

  fetchAllStats(): Observable<UserStats[]> {
    return this.httpClient.get<UserStats[]>(`${environment.apiUrl}/userstats/all`)
  }
}
