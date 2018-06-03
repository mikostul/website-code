import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {
  resetpassForm: FormGroup;
  email: AbstractControl;

  /**
   *
   * @param {FormBuilder} fb
   * @param {Router} router
   */
  constructor(private fb: FormBuilder, private router: Router) {
    this.resetpassForm = fb.group( {
      email: [null, Validators.required],
    });
    this.email = this.resetpassForm.controls['email'];
  }

  /**
   *
   * @param {FormGroup} form
   */
  checkForm(form: FormGroup) {
    if(form.valid) {
      this.seeValues(form);
    }
  }

  /**
   *
   * @param {FormGroup} form
   */
  seeValues(form: FormGroup) {
    console.log(form.value);
  }

  ngOnInit() {
  }

}
