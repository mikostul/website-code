import { Injectable } from '@angular/core';
import { HttpHeaders} from "@angular/common/http";
import { HttpClient} from "@angular/common/http";

import { Courses} from "./models/courses";
import { User} from "./models/user";

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }


  /**
   * Send an email to the user that created an account.
   * @returns {Observable<Object>}
   */
  registrationConfirmed(userData) {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.post('/api/sendMail', userData, {headers: headers});
  }


  /* --------------- Course methods ------------------ */
  /**
   * Get all courses.
   * @returns {Observable<Object>}
   */
  getCourses() { return this.http.get<Courses[]>('/api/courses'); }

  /**
   * Get one course.
   * @returns {Observable<Object>}
   */
  getCourse() { return this.http.get('/api/courses/:id');}

  /**
   *
   * @returns {Observable<Object>}
   */
  getSummerCourses() { return this.http.get<Courses[]>('/api/courses/summer');}

  /**
   *
   * @returns {Observable<Object>}
   */
  getWinterCourses() {return this.http.get<Courses[]>('/api/courses/winter');}

  /**
   *
   * @returns {Observable<Object>}
   */
  getSpringCourses() {return this.http.get<Courses[]>('/api/courses/spring');}

  /**
   *
   * @returns {Observable<Object>}
   */
  getFallCourses() {return this.http.get<Courses[]>('/api/courses/fall');}

  /**
   *
   * @param course
   * @returns {Observable<Object>}
   */
  addCourse(course) {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.post('/api/courses/', course, {headers: headers});
  }

  /* ----------------- End of course methods ----------------- */






  /* ----------------- User  methods ----------------- */

  /**
   *
   * @returns {Observable<User[]>}
   */
  getUsers() { return this.http.get<User[]>('/api/users');}

  /**
   *
   * @param user
   * @returns {Observable<Object>}
   */
  addUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.post('/api/users/', user, {headers: headers});
  }

  /**
   *
   * @param {number} DuId
   * @returns {Observable<Object>}
   */
  deleteUser(DuId: number) {
    let headers = new HttpHeaders();
    return this.http.delete('/api/users/' + DuId, {headers: headers});
  }

  /**
   *
   * @param user
   * @returns {Observable<any>}
   */
  verifyUser(user) {
    return this.http.post<any>('/api/login', user);
  }

  loggedIn(userType){
    console.log(userType);
    return userType == 'Admin' || userType == 'admin';
  }

  loggedIn2(userType){
    console.log(userType);
    return userType == 'Faculty';
  }
  loggedIn3(userType){
    console.log(userType);
    return userType == 'Student'||userType == 'student';
  }
}
