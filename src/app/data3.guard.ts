import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {DataService} from "./data.service";
import * as type from './globals';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class Data3Guard implements CanActivate {
  constructor (private _dataService: DataService, private _router: Router) {}
  canActivate(): boolean {
    if(this._dataService.loggedIn3(type.userType) || this._dataService.loggedIn2(type.userType)
      || this._dataService.loggedIn(type.userType)) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
