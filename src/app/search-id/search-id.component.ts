import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {User} from "../models/user";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-id',
  templateUrl: './search-id.component.html',
  styleUrls: ['./search-id.component.css']
})
export class SearchIdComponent implements OnInit {

   duMembers: User[] = [];
   wasFound: boolean;
   studentForm: FormGroup;
   wasSubmitted: boolean;

   user: User = new User();


  /**
   *
   * @param {DataService} service
   */
  constructor(private service: DataService, private router: Router) { }


  ngOnInit() {
    this.getUsers();
    this.studentForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      depaulID: new FormControl('', Validators.required)
    });
  }

  /**
   * Get all the users from the database.
   * @returns {Subscription}
   */
  getUsers() {
    return this.service.getUsers().subscribe((users: User[]) => {
      this.duMembers = users;
      //console.log(this.duMembers);
    });
  }


  /*
   * If the form is valid it searches for the student name and ID.
   * @param {FormGroup} form
   */
  verify(form: FormGroup) {
    if (!form) {
      form.reset();
    }
    this.wasSubmitted = true;
    for (let i = 0; i < this.duMembers.length; i++) {
      if (this.duMembers[i].firstName == form.get('firstName').value
        && this.duMembers[i].depaulID == form.get('depaulID').value) {
        this.user = form.value;  /* First Name and DePaul ID. */
        this.user.lastName = this.duMembers[i].lastName;
        this.user.degree = this.duMembers[i].degree;
        this.user.address = this.duMembers[i].address;
        // hard coded courses
        this.user.coursesTaken = this.duMembers[i].coursesTaken;
        this.wasFound = true;
      }
    }
  }

  /*
   * Reset the form.
   */
  reset() {
    this.studentForm.reset();
    this.router.navigateByUrl('/SearchID3');
    this.wasSubmitted = false;
    this.wasFound = false;
  }
}
