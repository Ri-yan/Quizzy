import { Component, OnChanges, OnInit, SimpleChanges,DoCheck, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit,OnDestroy {
  auth: boolean = false;
  private userSub!:Subscription;
  isAuth=false;
  constructor(private service:AuthService,private route:Router){
    this.auth=this.service.auth;
  }
  // ngDoCheck(){
  //   this.auth=this.service.auth;
  //   console.log(this.auth)

  // }
  ngOnInit(): void {
    this.auth=this.service.auth;
    console.log(this.auth)
    this.userSub= this.service.user.subscribe(user=>{
      this.isAuth= !user?false:true;
    })
  }
  onLogOut(){
    this.service.logout()
    this.route.navigateByUrl('/login');
  }
  ngOnDestroy() {
    this.userSub.unsubscribe()
  }
}
