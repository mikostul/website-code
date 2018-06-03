import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-optin',
  templateUrl: './optin.component.html',
  styleUrls: ['./optin.component.css']
})
export class OptinComponent implements OnInit {
  depaulForm1: FormGroup;
  agreement: AbstractControl;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

}
