import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TagListService {

  constructor(public http:HttpClient) { }
  getTags()
  {
    let url="https://api.codingninjas.com/api/v3/event_tags";
    return this.http.get(url);
  }
}
