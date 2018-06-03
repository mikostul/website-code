import { Component, OnInit } from '@angular/core';
import { DataService} from "../data.service";
import { User} from "../models/user";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-id',
  templateUrl: './search-id.component.html',
  styleUrls: ['./search-id.component.css']
})
export class SearchIdComponent implements OnInit {

  duMembers: User[] = [];
  user: User = new User();
  wasFound: boolean;
  studentForm: FormGroup;
  wasSubmitted: boolean;
  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
    this.getUsers();
    this.studentForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      depaulID: new FormControl(null, Validators.required)
    });
  }

  /**
   * Ge all the users from the database.
   * @returns {Subscription}
   */
  getUsers() {
    return this.service.getUsers().subscribe((users: User[]) => {
      this.duMembers = users;
      // console.log(this.duMembers);
    });
  }

  verify(form: FormGroup) {
    // if(!form) {
    //   form.reset();
    // }
    if(form == null) return;
    this.wasSubmitted = true;
    for(let i = 0; i < this.duMembers.length; i++ ) {
      if(this.duMembers[i].firstName == form.get('firstName').value &&
      this.duMembers[i].depaulID == form.get('depaulID').value) {
        this.user.firstName = form.get('firstName').value;
        this.user.depaulID = form.get('depaulID').value;
        this.user.lastName = this.duMembers[i].lastName;
        this.user.degree = this.duMembers[i].degree;
        this.user.address = this.duMembers[i].address;
        // hard coded courses.
        this.user.coursesTaken = ['CSC 200', 'CSC 300', 'CSC 301'];
        this.wasFound = true;
      }
    }
  }

  /**
   * Reset the form.
   */
  reset() {
    this.studentForm.reset();
    this.router.navigateByUrl('/SearchID');
    this.wasSubmitted = false;
    this.wasFound = false;
  }

}
