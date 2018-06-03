import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Courses} from "../models/courses";

@Component({
  selector: 'app-acourses',
  templateUrl: './acourses.component.html',
  styleUrls: ['./acourses.component.css']
})
export class AcoursesComponent implements OnInit {
  courses: Courses[] = [];

  /**
   *
   * @param {DataService} service
   */
  constructor(private service: DataService) { }

  ngOnInit() {
    this.getAllCDMcourses();
  }

  /**
   * Get all the CDM courses available.
   */
  getAllCDMcourses() {
    this.service.getCourses().subscribe((courses: Courses[]) => {
      this.courses = courses;
      // console.log(courses);
    });
  }

}
