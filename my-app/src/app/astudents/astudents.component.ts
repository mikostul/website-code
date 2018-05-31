import { Component, OnInit } from '@angular/core';
import {DataService} from "../Data.service";
import {User} from "../../models/User";

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
   * Get all the students.
   */
  getStudents() {
    this.service.getUsers().subscribe((stu: User[]) => {
      this.students = stu;
      console.log(this.students);
      this.students.forEach((stu) => console.log(stu));
    });
  }
}

