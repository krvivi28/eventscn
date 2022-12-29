import { Component, OnInit } from '@angular/core';
// import { ngbCarouselTransitionOut } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';
import { ApiEventsService } from "../services/api-events.service";
import { Event } from '../InterFaces/eventType';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  event: Event[] = [];
  eventCategory: string = "ALL_EVENTS";
  eventSubCategory: string = "Upcoming";
  selectedTagList: string[] = [];
  pageNo: number = 0;
  constructor(public events: ApiEventsService) {

  }
  ngOnInit(): void {
    let parms = `?event_category=${this.eventCategory}&event_sub_category=${this.eventSubCategory}&tag_list=`; //Career Guidance,Coding Concepts,Competitive Programming,Futuristic Tech&offset=0`
    let temp = "";
    for (let i = 0; i < this.selectedTagList.length; i++) {
      if (i + 1 == this.selectedTagList.length)
        temp += this.selectedTagList[i];
      else
        temp += `${this.selectedTagList[i]},`;

    }
    parms += temp;
    parms += `&offset=${this.pageNo}`;

    this.events.getEvents(parms).subscribe((data: any) => {
      this.event = data.data.events;
    });
  }
  updateApi() {
    let parms = `?event_category=${this.eventCategory}&event_sub_category=${this.eventSubCategory}&tag_list=`; //Career Guidance,Coding Concepts,Competitive Programming,Futuristic Tech&offset=0`
    let temp = "";
    for (let i = 0; i < this.selectedTagList.length; i++) {
      if (i + 1 == this.selectedTagList.length)
        temp += this.selectedTagList[i];
      else
        temp += `${this.selectedTagList[i]},`;

    }
    parms += temp;
    parms += `&offset=${this.pageNo}`;

    this.events.getEvents(parms).subscribe((data: any) => {
      this.event = data.data.events;
      console.log(this.event)
    });
  }
  eventCategoryChange(id: number) {
    console.log(id);
    if (id == 1)
      this.eventCategory = "ALL_EVENTS";
    else if (id == 2)
      this.eventCategory = "WEBINAR";
    else if (id == 4)
      this.eventCategory = "BOOTCAMP_EVENT";
    else if (id == 5)
      this.eventCategory = "WORKSHOP";
    else if (id == 3)
      this.eventCategory = "CODING_EVENT";
    this.updateApi();
  }
  eventSubCategoryChange(id: number) {
    console.log(id);
    if (id == 11)
      this.eventSubCategory = "Upcoming";
    else if (id == 12)
      this.eventSubCategory = "Archived";
    else if (id == 13)
      this.eventSubCategory = "All Time Favorites";
    this.updateApi();
  }
  eventPageChange(id: number) {
    console.log(id);
    if (id == 11)
      this.pageNo = this.pageNo + 1;
    else if (id == 10)
      this.pageNo = this.pageNo > 0 ? this.pageNo - 1 : 0;
    else if (id == 1)
      this.pageNo = 1;
    else if (id == 2)
      this.pageNo = 2;
    else if (id == 3)
      this.pageNo = 3;
    this.updateApi();
  }
  onChnageTag(tags: string[]) {
    this.selectedTagList = tags;
    this.updateApi();
  }


}
