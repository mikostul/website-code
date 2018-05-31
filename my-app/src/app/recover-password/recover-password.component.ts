import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {
  resetpassForm: FormGroup;


  email: AbstractControl;


  constructor(private fb: FormBuilder, private router: Router) {

    this.resetpassForm = fb.group( {
      // same as username: new FormControl('', Validators.required)
      email: [null, Validators.required],
    });

    /* Setting the values of the username and password to the instance variables. */
    this.email = this.resetpassForm.controls['email'];
  }



  // to see if it is valid and send to student page
  checkForm(form: FormGroup) {
    if (form.valid ) {;
      this.seeValues(form);
    }
  }

  // to see what username and password the form got
  seeValues(form: FormGroup) {
    console.log(form.value);
  }

  ngOnInit() {
  }

}
