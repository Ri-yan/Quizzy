import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  url="assets/questions.json"
  constructor(private http:HttpClient) { }
  getQuestion(){
    return this.http.get<any>(this.url)
  }
}
