import { Component, OnInit ,DoCheck} from '@angular/core';
import { ActivatedRoute, Router,NavigationExtras } from '@angular/router';
import { interval } from 'rxjs';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-quizpage',
  templateUrl: './quizpage.component.html',
  styleUrls: ['./quizpage.component.css']
})
export class QuizpageComponent implements OnInit,DoCheck {
  questionList : any = [];
  currentQuestion:number = 0;
  points:number=0;
  counter=15;
  correctAnswer:number=0;
  incorrectAnswer:number=0;
  interval$:any;
  progress:string="0"
  quiz: { id: string; } | undefined;
  _id=""
  quizCompleted:boolean=true;
  constructor(private route:ActivatedRoute,private service:QuestionService,private router:Router){}
  ngDoCheck(): void {
    this.getResult()
  }
  ngOnInit(){
    this.quiz={
      id:this.route.snapshot.params['id']
    }
    this._id=this.quiz.id
    console.log(this.quiz);
    this.getQuestion()
    this.startCounter()
  }
  getQuestion(){
    this.service.getQuestion().subscribe(res=>{
      console.log(res[this._id])
      this.questionList = res[this._id]
    })
  }

  nextQuestion(){
    // if(this.currentQuestion>this.questionList.length){
    //   this.router.navigateByUrl('../')
    // }
      this.currentQuestion++;
  }
  previousQuestion(){
      this.currentQuestion--;
  }
  answer(currentQno:number,option:any){
    if(currentQno===this.questionList.length){
      setTimeout(()=>{
        this.quizCompleted=true;
        this.stopCounter();
        this.currentQuestion++;
      },1000)
     
    }
    if(option.correct && this.currentQuestion<this.questionList.length-1){
      this.points+=10;
      this.correctAnswer++;
      setTimeout(()=>{
        this.currentQuestion++;
        this.resetCounter()
        this.getProgress()
      },1000)
      
    }
    else{
      this.points-=10;
      setTimeout(()=>{
      if(this.currentQuestion<this.questionList.length-1){
        this.currentQuestion++;
      }
      this.resetCounter()
      this.incorrectAnswer++;
      this.getProgress()
    },1000)
  }
  }

  startCounter(){
    this.interval$ = interval(1000).subscribe(value=>{
      this.counter--;
      if(this.counter==0){
        this.currentQuestion++;
        this.counter=10;
        this.points-=10;
      }
    });
    setTimeout(()=>{
      this.interval$.unsubscribe();
    },100000)
  }
  stopCounter(){
    this.interval$.unsubscribe();
    this.counter=0;
  }
  resetCounter(){
    this.stopCounter();
    this.counter=15;
    this.startCounter();
  }
  resetQuiz(){
    this.resetCounter();
    this.getQuestion();
    this.points=0;
    this.counter=15;
    this.currentQuestion=0;
    this.progress="0";
  }
  getProgress(){
    this.progress=((this.currentQuestion/this.questionList.length)*100).toString()
    return this.progress
  }
  navigationExtras: NavigationExtras = {
    state: {
      points:this.points,
      correctAns: this.correctAnswer,
      incorrectAns: this.incorrectAnswer,
      quizId: this._id,
    }
  }
  getResult(){
    if(this.currentQuestion==5){
      this.router.navigate(["/quiz",this._id,"result"],{state: {
        points:this.points,
        correctAns: this.correctAnswer,
        incorrectAns: this.incorrectAnswer,
        quizId: this._id,
      }})
    }
  }
}
