import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

declare let $:any;
@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {
@Input('images') images;
@Output () selectedImg : EventEmitter<string> = new EventEmitter();
@Output () userImg : EventEmitter<Object> = new EventEmitter();
 image : string;
  selected : string;

  constructor() { }

  ngOnInit() {
    $('.collapsible').collapsible();
    this.selected = this.images[0].imgUrl;
  }

  setImg(img){
    this.selected = img;
    this.image = img;
  }

  userSelectedImg(){
    this.selectedImg.emit(this.image);
  }

  postImg(url){
    $('.collapsible').collapsible('close', 0);
    let img = {
      imgUrl : url
    };
    if(url)
        this.userImg.emit(img);
  }
}
