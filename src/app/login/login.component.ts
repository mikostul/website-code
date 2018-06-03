import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from "@angular/forms";
import { Router} from "@angular/router";
import {DataService} from "../data.service";
import { User} from "../models/user";
import * as type from '../globals';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: User;

  /**
   *
   * @param {Router} router
   * @param {DataService} service
   */
  constructor(private router: Router, private service: DataService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userID: new FormControl(),
      password: new FormControl()
    });
  }

  /**
   * Logs in an existing user.
   * @param form
   */
  logIn(form) {
    if (form.valid) {
      this.user = this.loginForm.value;
      let otherUser = new User();
      this.service.verifyUser(this.user).subscribe(user => {
        // console.log('User exists');
        // console.log('User logged in');
        otherUser = user;
        type.setValue(otherUser.userType);
        type.setUser(this.user.userID, this.user.password, otherUser.firstName, otherUser.lastName, otherUser.degree,otherUser.address,this.titleCase(otherUser.city),otherUser.zip.toString(),otherUser.state,otherUser.depaulID.toString(),otherUser.email);
        // console.log("type: " + type.userType)
        // console.log(this.user);
        // console.log(user);
        // console.log(otherUser);
        // console.log("User: "+type.userName + " " + type.password);
        if (type.userType == 'Student') {
          return this.router.navigateByUrl("/home");
        }
        else if (type.userType == 'student') {
          return this.router.navigateByUrl("/home");
        }
        else if (type.userType == 'Admin') {
          return this.router.navigateByUrl('/home3');
        }
        else if (type.userType == "admin") {
          return this.router.navigateByUrl('/home3');
        }
        else if (type.userType == 'Faculty') {
          return this.router.navigateByUrl('/home-faculty');
        }
      });
    }
    else {
      return;
    }
  }

  /**
   *
   * @param str
   * @returns {any}
   */
  titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
}
