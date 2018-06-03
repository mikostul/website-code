import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {User} from "../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userCollection: User[];

  registration: FormGroup;
  user: User = new User();
  userExists: boolean = false;
  wasSubmitted: boolean = false;

  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
    this.getUsers();

    this.registration = new FormGroup({
      firstName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      lastName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      address: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
      state: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      zip: new FormControl('',Validators.required),
      depaulID: new FormControl('',Validators.pattern('^[1-9]\d{0,2}$')),
      degree: new FormControl(''),
      email: new FormControl('',[Validators.required, Validators.email]),
      userID: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      password: new FormControl('',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      userType: new FormControl('')
    });
  }

  /**
   *
   * @param {FormGroup} form
   */
  create(form: FormGroup) {
    if (form == null) return;
    this.user = form.value;
    let randID = <HTMLInputElement> document.getElementById('IDgenerator');
    if(randID != null) {
      this.user.depaulID = Number(randID.value);
    }
    for(let i = 0; i < this.userCollection.length; i++) {
      if(this.userCollection[i].firstName ===  this.user.firstName &&
        this.userCollection[i].lastName === this.user.lastName &&
        this.userCollection[i].address === this.user.address) {
        // console.log('User exists.');
        this.userExists = true;
        return;
      }
    }
    this.service.addUser(this.user).subscribe( (user: User) => {
      // console.log('User registered.');
      this.wasSubmitted = true;
      return;
    });
  }

  /**
   * Generates a random ID.
   */
  generateID() {
    let digits = Math.floor(Math.random() * 90000) + 1000000;
    let result = <HTMLInputElement> document.getElementById('IDgenerator');
    result.value = String(digits);
  }

  /**
   * Reset the form.
   */
  resetForm() {
    this.registration.reset();
    this.router.navigateByUrl('/add');
    this.wasSubmitted = false;
    this.userExists = false;
  }

  /**
   * Get all the users.
   */
  getUsers() {
    this.service.getUsers().subscribe(x => {
      this.userCollection = x;
      // console.log(this.userCollection);
    })
  }
}
