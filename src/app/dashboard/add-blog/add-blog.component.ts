import {Component, OnInit, Output, EventEmitter, Input, AfterViewChecked, ChangeDetectorRef} from '@angular/core';

declare let $:any;
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent  implements OnInit{
 @Input('blog') blog;
 @Input('user') user;
 @Input('categories') categories;
 @Input('images') images;
  @Output() notify : EventEmitter<Object> =  new EventEmitter();
  @Output('selectedImg') selectedImg : EventEmitter<string> = new EventEmitter();
  @Output () postUsrImg : EventEmitter<Object> = new EventEmitter();
  categorySelect : string;
  currentdate  :string;
  img :string;

  constructor() { }

  chooseCategory(category){
    this.categorySelect = category;
  }

  addImg(){
      $('.modal').modal();
  }
  userImg(img){
    this.img = img;
  }

  addPost(blog){
      this.blog.category = this.categorySelect;
      this.blog.imgUrl = this.img;
      this.blog.publishDate=this.currentdate;
      this.notify.emit(this.blog);
      this.blog = "";
  }
  ngOnInit(){
    $('select').material_select();
    this.categorySelect = this.categories[0].category;
    var nowDate = new Date();
    this.currentdate = nowDate.getFullYear()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getDate();
    this.blog.author = this.user.username;
  }

  showCategories(){
    console.log(this.categories);
  }

  postImg(imgUrl){
    this.postUsrImg.emit(imgUrl);
  }
}
