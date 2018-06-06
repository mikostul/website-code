import { Injectable } from '@angular/core';
import {Quarter} from "./degree-plan-form/quarter";

@Injectable()

/**
 * This service is suppose to transfer data from the DegreeProgress component to View progress
 */
export class TransfererService {
  public pathMap: Map<number, Array<Quarter>> = new Map();
  constructor() {}

  setData(number, data) {
    this.pathMap = new Map(data);

  }
  printPath() {
    this.pathMap.forEach(function (key, value, map) {
      if(map.size < 0) {
        console.log('Empty path.');
      } else {
        console.log(key + '------->' + value);
      }
    });
  }
}
