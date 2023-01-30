import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './navigation/navigation.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { QuizpageComponent } from './quizpage/quizpage.component';
import { ResultpageComponent } from './quizpage/resultpage/resultpage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpanelComponent } from './adminlogin/adminpanel/adminpanel.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { QuestionService } from './service/question.service';
import { HttpClientModule } from '@angular/common/http';
import { ChangebgDirective } from './quizpage/changebg.directive';
import { AuthService } from './auth.service';
import { AuthguardService } from './service/authguard.service';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SignupComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    QuizpageComponent,
    ResultpageComponent,
    AdminloginComponent,
    AdminpanelComponent,
    ForgotpasswordComponent,
    ChangebgDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [QuestionService,AuthService,AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
