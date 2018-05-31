import {Component, OnInit} from '@angular/core';
import {DataService} from '../Data.service';
import {User} from '../../models/User';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Student} from "../../models/Student";

@Component({
  selector: 'app-search-id',
  templateUrl: './search-id.component.html',
  styleUrls: ['./search-id.component.css']
})
export class SearchIDComponent implements OnInit {

   duMembers: User[] = [];
   wasFound: boolean;
   studentForm: FormGroup;
   wasSubmitted: boolean;

   student: Student = new Student();


  /**
   *
   * @param {DataService} service
   */
  constructor(private service: DataService) { }


  ngOnInit() {
    this.getUsers();
    this.studentForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      depaulID: new FormControl(null, Validators.required)
    });
  }

  /**
   * Get all the users from the database.
   * @returns {Subscription}
   */
  getUsers() {
    return this.service.getUsers().subscribe((user: User[]) => {
      this.duMembers = user;
      console.log(this.duMembers);
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
        this.student = form.value;  /* First Name and DePaul ID. */
        this.student.lastName = this.duMembers[i].lastName;
        this.student.degree = this.duMembers[i].degree;
        this.student.address = this.duMembers[i].address;
        // hard coded courses
        this.student.coursesTaken = ['CSC 200', 'CSC 300', 'CSC 301', 'Wtf!'];
        this.wasFound = true;
      }
    }
  }

  /*
   * Reset the form.
   */
  reset() {
    this.studentForm.reset();
    this.wasSubmitted = false;
    this.wasFound = false;
  }
}

