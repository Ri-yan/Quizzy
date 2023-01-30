import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  genders=['male','female','others'];
  isLoading=false;
  error:string = "";
  constructor(private service:AuthService,private route:Router){}
  ngOnInit(): void {
    localStorage.setItem("auth","true");
  }
  onSignupSubmit(value:NgForm){
    this.isLoading=true;
    const email = value.value.email
    const password = value.value.password
    if(!value.valid){
      return;
    }
    this.service.signup(email,password).subscribe(res=>{
      console.log(res)
      this.isLoading=false;
      localStorage.setItem("auth","true");
      this.route.navigateByUrl("/");
    },error=>{
      this.error=error.message
      console.log(error)
      this.isLoading=false;
    })
    console.log(value)
    // setTimeout(()=>{
    //   value.reset();
    // },3000)
    value.reset();
  }
}
