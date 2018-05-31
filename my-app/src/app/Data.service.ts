import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {User} from '../models/User';
import {Courses} from '../models/Courses';



@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }


  /**
   * Send an email to the user that created an account.
   * @returns {Observable<Object>}
   */
  registrationConfirmed(userData) {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/api/sendMail', userData, {headers: headers});
  }

  /**
   * All the courses from the first table
   * @returns {Observable<Object>}
   */
  getCourses() {
    return this.http.get('http://localhost:3000/api/courses');
  }

  /**
   * Gets one course
   * @returns {Observable<Object>}
   */
  getCourse() {
    return this.http.get('http://localhost:3000/api/course/:id')
  }


  /**
   * Gets all the users.
   * @returns {Observable<User[]>}
   */
  getUsers() {
    return this.http.get<User[]>('http://localhost:3000/api/users');
  }



  /**
   * Add a new user
   * @param newUser
   * @returns {Observable<Object>}
   */
  addUser(newUser) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/user', newUser, {headers: headers});
  }

  /**
   * Delete a user.
   * @param {number} DuId
   * @returns {Observable<Object>}
   */
  deleteUser(DuId: number) {
    let headers = new HttpHeaders();
    return this.http.delete('http://localhost:3000/api/User/' + DuId, {headers: headers});
  }


  /**
   * Logs in.
   * @param user
   * @returns {Observable<any>}
   */
  verifyUser(user) {
    // any to avoid errors
    return this.http.post<any>('http://localhost:3000/api/login', user);
  }


  loggedIn(userType){
    console.log(userType);
    return userType == 'Admin' || userType == 'admin' || userType =='Administrator';
  }

  loggedIn2(userType){
    console.log(userType);
    return userType == 'Faculty';
  }
  loggedIn3(userType){
    console.log(userType);
    return userType == 'Student'||userType == 'student';
  }

  /**
   * Get all the courses.
   * @returns {Observable<Courses[]>}
   */
  getxCourses() {
    return this.http.get<Courses[]>('http://localhost:3000/api/courses');
  }

  /**
   * Get all summer courses.
   * @returns {Observable<Courses[]>}
   */
  getSummerCourses() {
    return this.http.get<Courses[]>('http://localhost:3000/api/summer');
  }

  /**
   * Get all winter courses.
   * @returns {Observable<Courses[]>}
   */
  getWinterCourses() {
    return this.http.get<Courses[]>('http://localhost:3000/api/winter');
  }

  /**
   * Get all spring courses.
   * @returns {Observable<Courses[]>}
   */
  getSpringCourses() {
    return this.http.get<Courses[]>('http://localhost:3000/api/spring');
  }

  /**
   * Get all fall courses.
   * @returns {Observable<Courses[]>}
   */
  getFallCourses() {
    return this.http.get<Courses[]>('http://localhost:3000/api/fall');
  }

  /**
   * Add a course.
   * @param Course
   * @returns {Observable<Object>}
   */
  addxCourse(course) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/course', course, {headers: headers});
  }

  /**
   * Delete a course.
   * @param {number} courseID
   * @returns {Observable<Object>}
   */
  deleteCourse(courseID: number) {
    let headers = new HttpHeaders();
    return this.http.delete('http://localhost:3000/api/course/:COURSE_ID' + courseID, {headers: headers});
  }
}
