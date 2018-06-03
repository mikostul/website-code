import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Courses} from "../models/courses";

@Component({
  selector: 'app-aclasses',
  templateUrl: './aclasses.component.html',
  styleUrls: ['./aclasses.component.css']
})
export class AclassesComponent implements OnInit {
  courses: Courses[] = [];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.getAllCDMCourses();
  }

  getAllCDMCourses() {
    this.service.getCourses().subscribe((courses: Courses[]) => {
      this.courses = courses;
    });
  }

}
