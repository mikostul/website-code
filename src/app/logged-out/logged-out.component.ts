import { Component, OnInit } from '@angular/core';
import * as type from '../globals';

@Component({
  selector: 'app-logged-out',
  templateUrl: './logged-out.component.html',
  styleUrls: ['./logged-out.component.css']
})
export class LoggedOutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    type.setUser('','','','','','','','','','','');
    type.setValue('');
  }

}
