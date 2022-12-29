import { Component,Input, OnInit} from '@angular/core';
import { Event } from '../InterFaces/eventType';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
@Input() event: Event={};
ngOnInit(): void{
  console.log(this.event);

}
    
}
