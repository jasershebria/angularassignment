import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

 @Input() imgsrc:string = "";

 cardclicked:boolean=false;

 pcardclicked(){
  this.cardclicked =!this.cardclicked;
  
 }


}
