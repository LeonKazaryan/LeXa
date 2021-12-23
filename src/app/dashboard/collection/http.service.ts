import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getCharactersData(): Observable<any>{
    return this.http.get('https://swapi.dev/api/people/')
  }
}
