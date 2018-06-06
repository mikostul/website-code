import { Component, OnInit } from '@angular/core';
import {TransfererService} from "../transferer.service";
import * as type from  './../globals';
import {Quarter} from "../degree-plan-form/quarter";

@Component({
  selector: 'app-degreeprogress',
  templateUrl: './degreeprogress.component.html',
  styleUrls: ['./degreeprogress.component.css']
})
export class DegreeprogressComponent implements OnInit {

  coursePath: Array<any> = [];

  constructor(private transfererService: TransfererService) { }

  ngOnInit() {
    this.transfererService.printPath();
    console.log(type.path);
    this.path();
  }

  path(): Array<any> {
    this.coursePath = type.path;
    return this.coursePath;
  }
}
