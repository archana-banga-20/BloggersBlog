import { Component, OnInit } from '@angular/core';
import {CanActivateService} from "../can-activate.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private request : CanActivateService) { }

  ngOnInit() {
  }

  postData(username:String,email:String,password:String,){
    let oj ={
      email :email,
      username : username,
      password : password,
      favourites : []
    }
    this.request.postData(oj)
      .subscribe(data =>{
        console.log(data)
      });
  }
}
