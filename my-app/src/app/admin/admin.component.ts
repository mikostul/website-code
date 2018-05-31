import { Component, OnInit } from '@angular/core';
import {DataService} from "../Data.service";
import * as type from "../globals";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

   studentuser: string;

  /**
   *
   * @param {DataService} service
   */
  constructor(private service: DataService) { }


  ngOnInit() {
    this.studentuser=type.firstName+" "+type.lastName;
  }

}
