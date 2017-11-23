import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
declare let $:any;
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
@Input('categories') categories;
  @Input('user') user;
  @Input('blogs') blogs;
  @Input('author') author;
  @Output() notify : EventEmitter<number> = new EventEmitter();
  @Output() delete : EventEmitter<number> = new EventEmitter();
  @Output() update : EventEmitter<number> = new EventEmitter();
  @Output() favourite : EventEmitter<Object> = new EventEmitter();
  @Output()  category : EventEmitter<string> = new EventEmitter();

  filterBlogs:any;
  categorySelect: string;
  constructor() {
  }

  ngOnInit() {
    this.chooseCategory(this.categories[0].category);
  }

  createCategory(){
    $('.modal').modal();
  }

  postCategory(category){
    console.log("categories  "+ category);
    this.category.emit(category);
  }
  chooseCategory(filterBy){
    console.log("Entered");
    console.log(filterBy);

    filterBy = filterBy.toLocaleLowerCase();
    this.filterBlogs = this.blogs.filter((blog) =>
      blog.category.toLocaleLowerCase().indexOf(filterBy) != -1);
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



  select(){
    this.notify.emit(4);
  }

  deleteBlog(id:number){
    this.delete.emit(id);
  }

  editMode(blog){
    this.update.emit(blog);
  }


}
