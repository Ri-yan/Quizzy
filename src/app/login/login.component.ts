import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy{
  private userSub!:Subscription;
  isAuth=false;
  loginForm!: FormGroup ;
  isLoading=false;
  error:string = "";
  constructor(private service:AuthService,private route:Router){}
  
  ngOnInit(){
      this.loginForm = new FormGroup({
        "email": new FormControl(null,[Validators.required,Validators.email]),
        "password":new FormControl(null,[Validators.required])
      })
      this.userSub= this.service.user.subscribe(user=>{
        this.isAuth= !user?false:true;
      })
      localStorage.setItem("auth","false");
    }
  
  onLogSubmit(){
    this.isLoading=true;
    const email = this.loginForm.value.email
    const password = this.loginForm.value.password
    if(!this.loginForm.valid){
      return;
    }
    this.service.login(email,password).subscribe(res=>{
      console.log(res)
      this.isLoading=false;
      this.service.auth=true;
      localStorage.setItem("auth","true");
      this.route.navigateByUrl("/");
    },error=>{
      this.error=error.message
      console.log(error)
      this.isLoading=false;
    })
    console.log(this.loginForm)
    // setTimeout(()=>{
    //   value.reset();
    // },3000)
    this.loginForm.reset();
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe()
  }
}
