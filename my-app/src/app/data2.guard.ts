import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataService } from './Data.service';
import * as type from "./globals";


@Injectable()
export class Data2Guard implements CanActivate {
  constructor(private _dataService: DataService,
              private _router: Router) {}

  canActivate(): boolean {
    if(this._dataService.loggedIn2(type.userType) || this._dataService.loggedIn(type.userType)){
      return true
    }
    else{
      this._router.navigate(['/login'])
      return false
    }
  }
}
