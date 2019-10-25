import { Component, OnInit } from '@angular/core';
import { GetFoodService } from  '../get-food.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _Prof: GetFoodService) { }
  currentRest: any;
  ngOnInit() {
    this.currentRest = this._Prof.profile;
    console.log(this.currentRest.name);
    console.log(this.currentRest.photo_reference);
    }

}
