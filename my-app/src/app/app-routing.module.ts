import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FoodComponent} from './food/food.component';
import {ProfileComponent} from './profile/profile.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'food', component: FoodComponent},
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
