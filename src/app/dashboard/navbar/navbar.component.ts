import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
@Output () notify : EventEmitter<number> = new EventEmitter<number>();
  selectedItem : string;
  tab : number;
 navItems : Object[] = [
   {id:1,item : "All Posts"},
   {id:2,item : "My Posts"},
   {id:3,item : "Categories"}
 ]

  ngOnInit(){
   this.selectedItem = "All Posts";
  }
  select(item : string, id : number){
    this.selectedItem = item;
    this.tab = id;
    this.notify.emit(this.tab);
  }

}
