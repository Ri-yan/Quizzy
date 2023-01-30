import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit{

questionform!: FormGroup ;
added=false;
ngOnInit(): void {
  this.questionform = new FormGroup({
    "question": new FormControl(null,[Validators.required,Validators.email]),
    "option1":new FormControl(null,[Validators.required]),
    "option2":new FormControl(null,[Validators.required]),
    "option3":new FormControl(null,[Validators.required]),
    "option4":new FormControl(null,[Validators.required]),
    "topic":new FormControl(null,[Validators.required])
  })
}
onSubmit(){
  this.added=true;
  console.log(this.questionform);
}
remove(){
  this.added=false
}
Clear(){
  this.added=false
  this.questionform.reset();
}
}
