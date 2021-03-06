import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgModel } from '@angular/forms';
// changes made here
import {AppComponent} from './app.component';

@Injectable({
  providedIn: 'root'
})
export class GetFoodService {

  API_KEY:string = 'AIzaSyCQxrCycy69Nm24iI3nXOfLRNNXLyHfs5Y';
  food: any;
  constructor(private httpClient: HttpClient) { }
  
  profile:any;
  

  public getRestaurant(){
    // return this.httpClient.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${document.getElementById("search1").getAttribute('ng-reflect-model')}&key=${this.API_KEY}`);
    return this.httpClient.get("http://localhost:3000/food");
  }
  public setRestaurant(profile: any){
    this.profile = profile;
    
  }
    
  }
  



