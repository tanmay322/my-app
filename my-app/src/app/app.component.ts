import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  value;
  onEnter(value: string){
    this.value = value;
  }
  ngOnInit(): void {

  }
  title = 'service-demo';
  onSubmit(){
    
  }
}
