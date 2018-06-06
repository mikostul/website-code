import {Quarter} from "./degree-plan-form/quarter";

export let userType = '';
export let userName = '';
export let password = '';
export let firstName = '';
export let lastName = '';
export let degree = '';
export let address = '';
export let city = '';
export let zip = '';
export let state = '';
export let DepaulID = '';
export let email = '';

export let path = [];
export function setPath(newValue: Array<any>) {
  path.push(newValue);
}


export function setValue(newValue: string) {
  userType = newValue;
}

export function setUser(name: string, pass: string, name1: string, name2: string, deg: string,ad: string,cit: string,zipcode:string,stat:string,id:string,Email:string) {
  userName = name;
  password = pass;
  firstName = name1;
  lastName = name2;
  degree = deg;
  address =ad;
  city=cit;
  zip=zipcode;
  state=stat;
  DepaulID=id;
  email=Email;
}
