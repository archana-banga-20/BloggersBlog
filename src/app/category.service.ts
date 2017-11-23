import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import "rxjs/add/operator/map";

const header = {headers : new Headers({'Content-type' : 'application/json'})}
/*const BASE_URL = "http://localhost:3000/categories";*/
const BASE_URL = "api/categories";

@Injectable()
export class CategoryService {

  constructor(private http : Http) { }

  getData(){
    let data = this.http.get(BASE_URL)
      .map(res => res.json());
    return data;
  }

  postData(data){
    console.log(data);
    return this.http.post(BASE_URL,data,header)
      .map(res => res.json())
  }
}
