import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.css']
})
export class MyBlogsComponent implements OnInit {
  @Input('blogs') blogs;
  @Input('user') user;
  @Output() delete : EventEmitter<number> = new EventEmitter();
  @Output() update : EventEmitter<number> = new EventEmitter();
  @Output() favourite : EventEmitter<Object> = new EventEmitter();

  selectedtab : string;
  showableBlogs : any;
  @Output() notify : EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.showableBlogs = this.loadMyBlogs();
    this.selectedtab = "myblogs";
  }

  select(){
    this.notify.emit(4);
  }

  show(filterBlogs){
    if(filterBlogs === 'myblogs'){
      this.selectedtab = "myblogs";
      this.showableBlogs = this.loadMyBlogs();
    }
    else if(filterBlogs === 'myfavourite'){
      this.selectedtab = "myfavourite";
      this.showableBlogs = this.loadMyFavouriteBlog();
    }
  }

  loadMyBlogs(){
    let blogArr ;
    let filterBy = this.user.username;

    console.log(this.blogs);
    filterBy = filterBy.toLocaleLowerCase();
    blogArr = this.blogs.filter((blog) =>
      blog.author.toLocaleLowerCase().indexOf(filterBy) != -1);
    return blogArr;
  }

  loadMyFavouriteBlog(){
    let blogArr = [];
      for (let item of this.user.favourites){
        for(let blog of this.blogs){
          if(blog.id === item){
            blogArr.push(blog)
          }
        }
      }
      console.log(blogArr);
return blogArr;
  }


  toggleFav(blogId,status){
    console.log(status);
    console.log(blogId);
    if(status === true)
      this.user.favourites.push(blogId);
    else{
      let index = this.user.favourites.indexOf(blogId);
      if (index >= 0)
        this.user.favourites.splice(index,1);
    }
    console.log(this.user.favourites);

    this.favourite.emit(this.user);
  }

  deleteBlog(id:number){
    this.delete.emit(id);
  }

  editMode(blog){
    this.update.emit(blog);
  }


}


