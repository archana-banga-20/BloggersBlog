import { Component, OnInit } from '@angular/core';
import {BlogListService} from "../blog-list.service";
import {CanActivateService} from "../can-activate.service";
import {CategoryService} from "../category.service";
import {ImageService} from "../image.service";

interface Blog{
  id : number,
  title: string,
  author: string,
  category:string,
  desc:string,
  imgUrl:string,
  publishDate:string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
author : string;
  blogs : Blog[];
  tab:number = 1;
   newBlog : Blog = {
     id : null,
     title: "",
     author: "",
     category:"",
     desc:"",
     imgUrl:"",
     publishDate:""
   };
   user : any;
   images : any;
  categories : any;
  constructor(private request:BlogListService,private userService : CanActivateService,
              private categoryService : CategoryService,private imageService : ImageService){

  }

  ngOnInit(){
    this.loadBlogs();
    this.user = this.userService.getuser();
    this.author = this.user.username;
    this.categories = this.getCategories();
    this.images = this.getImages();
    console.log(this.author);
  }

  getCategories(){
    this.categoryService.getData()
      .subscribe(data => {
        this.categories = data;
      })
  }

  postCategory(data){
    console.log("dashboard "+ data);
    this.categoryService.postData(data)
      .subscribe(data => {
        this.getCategories();
      })
  }

  getImages(){
    this.imageService.getData()
      .subscribe(data => {
        this.images = data;
        console.log(this.images);
      })
  }

  postImages(data){
    console.log("dashboard "+ data);
    this.imageService.postData(data)
      .subscribe(data => {
        this.getImages();
      })
  }

  editMode(data){
    this.newBlog = data;
    this.tab = 4;
  }

  loadBlogs(){
    this.request.getData()
      .subscribe(data => {
        this.blogs = data;
      })
  }

  updateFavourite(userFav){
    this.userService.updateData(this.user)
      .subscribe(data =>{
        this.loadBlogs();
      })
  }

  postBlog(newBlog){
    console.log(newBlog);
    this.request.checkData(newBlog)
      .subscribe(data =>{
        this.loadBlogs();
    })
    this.tab = 1;
  }

  deleteBlog(id){
    this.request.deleteData(id)
      .subscribe(data =>{
        console.log(id);
        this.loadBlogs();
      })
    this.tab = 1;
  }

  select(event){
    this.tab = event;
  }

}
