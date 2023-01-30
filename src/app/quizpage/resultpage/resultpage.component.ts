import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizpageComponent } from '../quizpage.component';
import { Location } from '@angular/common';
@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.component.html',
  styleUrls: ['./resultpage.component.css']
})
export class ResultpageComponent {
  result:any;
  verdict:string="Try again"
  constructor(private router: Router,private location: Location) {
    console.log(this.location.getState())
    this.result=this.location.getState()
    if(this.result.correctAns==5){
      this.verdict="Excellent"
    }
    else if(this.result.correctAns>=3&&this.result.correctAns<=4){
      this.verdict="Good"
    }
    else if(this.result.correctAns>=2&&this.result.correctAns<3){
      this.verdict="Average"
    }else{
      this.verdict="Try Again"
    }
  }
}
