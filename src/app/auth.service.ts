import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { User } from './user.model';

interface AuthResponse{
  idToken	:string;
email	:string;
refreshToken	:string;	
expiresIn	:string;	
localId	:string;
registered?:boolean;
}
@Injectable({
  providedIn: 'root'
})

export class AuthService implements OnInit {
  user = new BehaviorSubject<User>(null!);
  auth:boolean=false;

  constructor(private http:HttpClient) { }
  ngOnInit() {
    this.auth=false;

  }
  
  signup(email:string,password:string){
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAXbkyfDSalTKZbFWHFDWxK8p8q2u2YZRM',{
        email:email,
        password:password,
        returnSecureToken:true
    }).pipe(tap(resData=>{
      this.handleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn)
    }))
  }
  login(email:string,password:string){
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAXbkyfDSalTKZbFWHFDWxK8p8q2u2YZRM',{
        email:email,
        password:password,
        returnSecureToken:true
    }).pipe(tap(resData=>{
      this.handleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn)
    }))
  }
  
  handleAuthentication(email:string,userId:string,token:string,expiresIn:number){
      const exipationDate = new Date(new Date().getTime()+ +expiresIn*1000)
      const user = new User(email,userId,token,exipationDate);
      this.user.next(user);
      localStorage.setItem('userData',JSON.stringify(user))
      }
      autologin(){
        const userData:{
          idToken	:string;
          email	:string;
          id	:string;	
          _token	:string;	
          _tokenExpirationDate	:string;
        }=JSON.parse(localStorage.getItem('userData') || "");
        if(!userData){
          return
        }
        const loadUser = new User(userData.email,userData.id,userData._token,new Date(userData._tokenExpirationDate));
      if(loadUser.token){
        this.user.next(loadUser)
      }
      }
      logout(){
        this.user.next(null!);
        localStorage.removeItem('userData');
      }
}
