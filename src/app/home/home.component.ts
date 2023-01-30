import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
quizList : any =[
  {
    name:"Angular Quiz",
    logo:"https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg",
    route:"quiz/angular"
  },
  {
    name:"React Quiz",
    logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    route:"/quiz/react"
  },
  {
    name:"Java Quiz",
    logo:"https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg",
    route:"/quiz/java"
  },
  {
    name:"HTML Quiz",
    logo:"https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png",
    route:"/quiz/html"
  },
  {
    name:"C# Quiz",
    logo:"https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
    route:"/quiz/c#"
  },
  {
    name:"CSS Quiz",
    logo:"https://cdn.cdnlogo.com/logos/c/18/css.svg",
    route:"/quiz/css"
  },
]
}
