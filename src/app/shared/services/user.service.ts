import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  fetchMe(): Observable<User>{
    return this.httpClient.get<User>(`${environment.apiUrl}/user/me`)
  }

  fetchImage(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/user/image`)
  }
}
