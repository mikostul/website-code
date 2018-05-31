import { Component, OnInit } from '@angular/core';
import {User} from "../../models/User";
import {DataService} from "../Data.service";

@Component({
  selector: 'app-aremove-user',
  templateUrl: './aremove-user.component.html',
  styleUrls: ['./aremove-user.component.css']
})
export class AremoveUserComponent implements OnInit {

   students: User[] = [];


  constructor(private service: DataService) { }

  ngOnInit() {
    this.getStudents();
  }



  /**
   * Get users.
   */
  getStudents() {
    this.service.getUsers().subscribe((students: User[]) => {
      this.students = students;
      console.log(this.students);
      this.students.forEach((stu) => console.log(stu));
    });
  }


  /**
   *
   * @param {number} id
   */
  delete(id: number) {
    this.service.deleteUser(id).subscribe(res =>{
      console.log('Deleted');
    }, (error) =>{
      console.log(error);
    });
    // delete it also from the view
    for(let i = 0; i < this.students.length; i++) {
      if(this.students[i].depaulID === id) {
        this.students.splice(i, 1);
        break;
      }
    }
  }
}
