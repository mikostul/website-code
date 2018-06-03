import { Component, OnInit } from '@angular/core';
import * as type from '../globals';
import {DataService} from "../data.service";

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  studentuser: string;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.studentuser = type.firstName + " " + type.lastName;
  }

}
