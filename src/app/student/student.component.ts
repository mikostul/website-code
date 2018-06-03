import { Component, OnInit } from '@angular/core';
import { DataService} from "../data.service";
import * as type from '../globals';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentuser: string;

  /**
   *
   * @param {DataService} service
   */
  constructor(private service: DataService) { }

  ngOnInit() {
    this.studentuser = type.firstName + " " + type.lastName;
  }

}
