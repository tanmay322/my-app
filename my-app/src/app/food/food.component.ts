import { Component, OnInit } from '@angular/core';
import { GetFoodService } from  '../get-food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  currentRest: any;
  articles;
  constructor(private apiService: GetFoodService) { }
  showProfile: boolean;
  ngOnInit() {
    this.apiService.getRestaurant().subscribe((data)=>{
      console.log(data);
      this.articles = data['results'];
    })
  }
  viewProfile(restaurent){
    this.showProfile=true;
    this.currentRest=restaurent;
    this.apiService.setRestaurant(restaurent);
  }
  backtoSearch(){
    this.showProfile=false;
  }

}
