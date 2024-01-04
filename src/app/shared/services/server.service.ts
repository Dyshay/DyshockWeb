import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Server} from "../models/server.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private httpClient: HttpClient) {
  }

  fetchAll(): Observable<Server[]> {
    return this.httpClient.get<Server[]>(`${environment.apiUrl}/servers/all`)
  }
}
