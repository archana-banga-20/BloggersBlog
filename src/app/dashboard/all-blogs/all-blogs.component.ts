import {Component, OnInit, Output, EventEmitter, Input, OnChanges} from '@angular/core';
import { ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class AllBlogsComponent implements OnInit{
  @Input('user') user;
  @Input('blogs') filterBlogs;
  @Input('author') author;
  @Output() notify : EventEmitter<number> = new EventEmitter();
  @Output() delete : EventEmitter<number> = new EventEmitter();
  @Output() update : EventEmitter<number> = new EventEmitter();
  @Output() titleFilter : EventEmitter<string> = new EventEmitter();
  @Output() favourite : EventEmitter<Object> = new EventEmitter();

  constructor() {
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
  onChange(titleSearch){
    console.log();
    /*this.titleFilter.emit(this.titleSearch);*/
    this.filterOnTitle(titleSearch)
  }
  ngOnInit() {

  }


  filterOnTitle(titleFilter){
    this.filterBlogs = titleFilter ? this.performFilter(titleFilter) :this.filterBlogs ;
  }

  performFilter(filterBy: string): Object[]{
    var filtered : Object[];
    console.log(this.filterBlogs);
    filterBy = filterBy.toLocaleLowerCase();
    filtered = this.filterBlogs.filter((blog) =>
      blog.title.toLocaleLowerCase().indexOf(filterBy) != -1);
    return filtered;
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
