import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isscrolled:boolean =false;
  @HostListener("document:scroll") scroll(){
    if(window.scrollY > 0){
      this.isscrolled =true;
      
    }else{
      this.isscrolled =false;
    }
   
  }
}
