import { Component, OnInit } from '@angular/core';
import {CanActivateService} from "../can-activate.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  error :string;
  constructor(private request : CanActivateService) { }

  ngOnInit() {
  }

  postData(username){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(username)){
      this.request.postUser(username);
      this.error = "";
    }
    else{
      this.error = "Incorrect email Id!!!";
  }
  }

  verify(username:String,password : String) {
    if (!this.request.verify(username, password)) {
        this.error ="Incorrect Credentials !!!"
    }
  }

}
