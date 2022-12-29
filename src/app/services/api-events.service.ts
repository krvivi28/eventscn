import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiEventsService {

  constructor(public http: HttpClient) { }
  getEvents(parms: any) {
    let url = "https://api.codingninjas.com/api/v3/events"
    url+=parms;
    return this.http.get(url);
  }
}
