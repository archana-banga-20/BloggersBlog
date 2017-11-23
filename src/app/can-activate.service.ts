import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {CanActivate} from "@angular/router";
import {forEach} from "@angular/router/src/utils/collection";

const header = {headers : new Headers({'Content-type' : 'application/json'})};
/*const BASE_URL = "http://localhost:3000/users";
const BASE_UPDATE_URL = "http://localhost:3000/users/";*/

const BASE_URL = "api/users";
const BASE_UPDATE_URL = "api/users/";

@Injectable()
export class CanActivateService implements CanActivate{
  user:any;
  status:boolean;
  constructor(private http : Http) { }

  canActivate():boolean{
    if(this.status){
      return true;
    }
    return false;
  }

  getuser(){
    return this.user;
  }

  getData(){
    return this.http.get(BASE_URL)
      .map(res => res.json());
  }

  updateData(data){
    console.log(data);
    return this.http.patch(`${BASE_UPDATE_URL}${data.id}`,data,header)
      .map(res => res.json())
  }

  postUser(email){
    let users;
    this.getData()
     .subscribe(data => {
       users = data;
       console.log(users);
       for (let item of users){
         if(item.email === email){
           this.user= item;
         }
       }
       console.log(this.user);
     });
  }

  postData(user){
    return this.http.post(BASE_URL,user,header)
      .map(res => res.json())
  }



  verify(email,password){
    console.log("hello")
      if(this.user.email === email && this.user.password === password){
        this.status = true;
        return true;
      }
      else
        return false;
  }
}
