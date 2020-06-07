import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { AnswerService } from 'src/app/services/answer.service';
import { Question } from 'src/app/models/question';
import { Answer } from 'src/app/models/answer';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styles: [
  ]
})
export class QuestionEditComponent implements OnInit {

  questionId;
  question: Question;
  answers: Answer[];
  loaded; boolean;
  constructor(private router: Router, 
              private questionService: QuestionService,
              private answerService: AnswerService,
              activeRoute: ActivatedRoute) { 
    this.questionId = activeRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.loadQuestion();
  }

  loadQuestion(){
    this.questionService.getQuestionById(this.questionId)
      .subscribe((data: Question) => {
          this.question = data;
          this.loadAnswers();
    })
  }
  
  loadAnswers(){
    this.answerService.getAnswersByQuestionId(this.questionId)
      .subscribe((data: Answer[])=> {
          this.answers = data;
          this.loaded=true; 
    });
  }
}
