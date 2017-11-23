import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import "rxjs/add/operator/map";

const header = {headers : new Headers({'Content-type' : 'application/json'})}
/*const BASE_URL = "http://localhost:3000/blogs";
const BASE_UPDATE_URL = "http://localhost:3000/blogs/";*/
const BASE_URL = "api/blogs";
const BASE_UPDATE_URL = "api/blogs/";
@Injectable()
export class BlogListService {

  constructor(private http : Http) { }

  getData(){
    return this.http.get(BASE_URL)
      .map(res => res.json());
  }

  postData(data){
    return this.http.post(BASE_URL,data,header)
      .map(res => res.json())
  }
  deleteData(id){
    return this.http.delete(`${BASE_UPDATE_URL}${id}`,header)
      .map(res => res.json())
  }


  updateData(data){
    console.log(data);
    return this.http.patch(`${BASE_UPDATE_URL}${data.id}`,data,header)
      .map(res => res.json())
  }

  checkData(data){
    return data.id?this.updateData(data) : this.postData(data)
  }

}
