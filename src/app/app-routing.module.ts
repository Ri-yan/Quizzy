import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpanelComponent } from './adminlogin/adminpanel/adminpanel.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuizpageComponent } from './quizpage/quizpage.component';
import { ResultpageComponent } from './quizpage/resultpage/resultpage.component';
import { AuthguardService } from './service/authguard.service';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {path:'',component:HomeComponent,canActivate:[AuthguardService]},
    {path:'quiz/:id', component: QuizpageComponent,canActivate:[AuthguardService]},
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'quiz/:id/result',component:ResultpageComponent,canActivate:[AuthguardService]},
    {path:'adminlogin',component:AdminloginComponent},
    {path:'admin',component:AdminpanelComponent},
    {path:'forgotpassword',component:ForgotpasswordComponent},
    // wildcard route
    {path:'**', redirectTo:""},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
