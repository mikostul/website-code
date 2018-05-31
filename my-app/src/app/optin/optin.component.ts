import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';




@Component({
  selector: 'app-optin',
  templateUrl: './optin.component.html',
  styleUrls: ['./optin.component.css']
})
export class OptinComponent implements OnInit {

  depaulForm1: FormGroup;

  agreement: AbstractControl;

  constructor(private fb: FormBuilder, private router: Router) {
    // this.depaulForm1 = fb.group( {
    //   agreement: [null, Validators.required]
    // });

    // /* Setting the values of the username and password to the instance variables. */
    // this.agreement = this.depaulForm1.controls['agreement'];
  }


  ngOnInit() {
  }

  // checkForm(form: FormGroup) {
  //   if (form.valid ) {
  //     this.router.navigateByUrl('/registration-complete');
  //     this.seeValues(form);
  //   }
  // }


  // // to see what username and password the form got
  // seeValues(form: FormGroup) {
  //   console.log(form.value);
  // }

}
