import { Component, OnInit } from '@angular/core';
import * as type from '../globals';
import {DataService} from "../data.service";

@Component({
  selector: 'app-aview-profile',
  templateUrl: './aview-profile.component.html',
  styleUrls: ['./aview-profile.component.css']
})
export class AviewProfileComponent implements OnInit {
  studentuser: string;
  studentaddress: string;
  id: string;
  degree: string;
  email: string;
  user: string;

  /**
   *
   * @param {DataService} service
   */
  constructor(private service: DataService) { }

  ngOnInit() {
    this.studentuser = type.firstName + " " + type.lastName;
    this.studentaddress = type.address + ", " + type.city+ ", " + type.state+ " " + type.zip;
    this.id = type.DepaulID;
    this.degree = type.degree;
    this.email = type.email;
    this.user = type.userName;
  }
}
