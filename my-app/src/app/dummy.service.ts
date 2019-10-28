import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor() { }
  dummyFunction(locat:string){
    console.log("logging from Service" + locat);
  }
}
