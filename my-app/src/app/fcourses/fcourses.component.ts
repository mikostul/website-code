import { Component, OnInit } from '@angular/core';
import {DataService} from "../Data.service";
import {Courses} from "../../models/Courses";

@Component({
  selector: 'app-fcourses',
  templateUrl: './fcourses.component.html',
  styleUrls: ['./fcourses.component.css']
})
export class FcoursesComponent implements OnInit {
   courses: Courses[] = [];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.getAllCDMcourses();
  }

  /**
   * Get all the CDM courses available.
   */
  getAllCDMcourses() {
    this.service.getxCourses().subscribe((courses: Courses[]) => {
      this.courses = courses;
      console.log(courses);
    });
  }
}

