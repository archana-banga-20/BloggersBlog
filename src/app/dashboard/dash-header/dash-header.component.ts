import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dash-header',
  templateUrl: './dash-header.component.html',
  styleUrls: ['./dash-header.component.css']
})
export class DashHeaderComponent implements OnInit {
@Input('author') author;
  constructor() { }

  ngOnInit() {
  }

}
