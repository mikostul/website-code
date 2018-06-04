import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "../models/user";
import {DataService} from "../data.service";

@Component({
  selector: 'app-accountcreation',
  templateUrl: './accountcreation.component.html',
  styleUrls: ['./accountcreation.component.css']
})
export class AccountcreationComponent implements OnInit {
  public depaulForm2: FormGroup;
  public user: User;

  constructor(private router: Router, private service: DataService) { }

  ngOnInit() {
    this.depaulForm2 = new FormGroup({
      firstName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      lastName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      address: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
      state: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      zip: new FormControl('',Validators.required),
      depaulID: new FormControl('',Validators.required),
      degree: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required, Validators.email]),
      userID: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      password: new FormControl('',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      userType: new FormControl('Student')
    });
  }

  /**
   *
   * @param depaulForm2
   */
  addUser(depaulForm2) {
    if(depaulForm2.valid) {
      this.user = this.depaulForm2.value;
      console.log(this.user);
      this.service.addUser(this.user).subscribe(x => {
        // console.log('New user has been registered.');
      });
      this.service.registrationConfirmed(this.user).subscribe(x => {
        console.log('Email sent.');
      })
      this.router.navigateByUrl('/optin');
    }
  }

  /**
   *
   * @param {string} passwordKey
   * @param {string} passwordConfirmationKey
   * @returns {(group: FormGroup) => void}
   */
  matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      const passwordInput = group.controls[passwordKey];
      const passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true});
      }
    };
  }
}
