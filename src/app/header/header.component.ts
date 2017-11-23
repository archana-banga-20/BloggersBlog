import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  websiteName : string = 'BloggersBlog';
  tab : number;
  selected : string;

  menuItems : Object[]=[
    {id : 1,item : "Home1"},
    {id : 2,item : "Home2"},
    {id : 3,item : "Home3"}
  ];


  select(itemName: string,num : number){
    this.tab = num;
    this.selected = itemName;
    console.log(this.selected);
  }



}
