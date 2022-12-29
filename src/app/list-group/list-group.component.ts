import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TagListService } from '../services/tag-list.service';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent implements OnInit {
  @Output() tagsEmit = new EventEmitter<string[]>();
  alltags: string[] = [];
  selecttag: string[] = [];
  constructor(public tags: TagListService) {

  }
  ngOnInit(): void {
    this.tags.getTags().subscribe((data: any) => {
      this.alltags = data.data.tags;
    });
  }

  onselectTag(id: number) {
    let tag = this.alltags[id];
    if (this.selecttag.indexOf(tag) != -1) {
      let index = this.selecttag.indexOf(tag);
      this.selecttag.splice(index, 1);
    }
    else
      this.selecttag.push(tag);
    this.tagsEmit.emit(this.selecttag);


  }

}
