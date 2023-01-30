import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  constructor(private route:Router){}
  onAdminLogInSubmit(value:any):void{
    console.log(value)
    this.route.navigateByUrl('admin');
  }
}
