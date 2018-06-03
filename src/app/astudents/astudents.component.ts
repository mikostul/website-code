import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {User} from "../models/user";

@Component({
  selector: 'app-astudents',
  templateUrl: './astudents.component.html',
  styleUrls: ['./astudents.component.css']
})
export class AstudentsComponent implements OnInit {
  students: User[] = [];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.getStudents();
  }

  /**
   * Get all the students registered.
   */
  getStudents() {
    this.service.getUsers().subscribe((stud: User[]) => {
      this.students = stud;
      // console.log(this.students);
      // this.students.forEach((stu) => console.log(stu));
    });
  }

}
