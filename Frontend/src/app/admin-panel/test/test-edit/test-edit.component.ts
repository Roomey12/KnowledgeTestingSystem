import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Test } from 'src/app/models/test';
import { Question } from 'src/app/models/question';
import { Answer } from 'src/app/models/answer';
import { QuestionService } from 'src/app/services/question.service';
import { queueScheduler, from } from 'rxjs';
import { concatMap, tap, finalize } from 'rxjs/operators';
import { AnswerService } from 'src/app/services/answer.service';

@Component({
  selector: 'app-test-edit',
  templateUrl: './test-edit.component.html',
  styles: [
  ]
})
export class TestEditComponent implements OnInit {

  testInfo: Map<Question, Answer[]>;
  testId;
  test: Test;
  loaded: boolean;
  showAddQuestion: boolean;
  showFillQuestion: boolean;
  newQuestion;
  answersCount;

  constructor(private testService: TestService, 
              private router: Router, 
              private questionService: QuestionService,
              private answerService: AnswerService,
              activeRoute: ActivatedRoute) {
      this.testId = activeRoute.snapshot.params["id"];
  }

  ngOnInit(){
    if(this.testId){
      this.loadTest();
      this.loaded = true;
    }
  }

  loadTest(){
    this.testService.getTestById(this.testId)
      .subscribe((data: Test) =>{
          this.test = data;
          this.loadTestInfoGet();
      })
  }

  loadTestInfoGet() {
    let testInfoGet = new Map<string, Answer[]>();
    this.testService.getTestStart(this.testId)
        .subscribe((data: Map<string, Answer[]>) => {
            testInfoGet = data; this.loaded = true;
            this.fillQuestions(testInfoGet);
        })
  }

  fillQuestions(testInfoGet: Map<string, Answer[]>) {
    this.testInfo = new Map<Question, Answer[]>();
    for (let t in testInfoGet) {
        this.questionService.getQuestionById(Number(t))
            .subscribe((data1: Question) => {
                this.fillTestInfo(testInfoGet, data1);
            })
    }
  }

  fillTestInfo(testInfo: Map<string, Answer[]>, question: Question) {
    this.testInfo.set(question, testInfo[question["questionId"].toString()]);
  }

  deleteQuestion(questionId: number){
    this.questionService.deleteQuestion(questionId).subscribe(data => {this.loadTestInfoGet()} );
  }

  deleteAnswer(answerId: number){
    console.log(answerId);
  }

  addQuestion(){
    this.showAddQuestion=true;
  }

  next(){
    let isMultiple = document.getElementById('isMultiple') as HTMLInputElement;
    let content = document.getElementById('content') as HTMLInputElement;
    let answersCount = document.getElementById('answersCount') as HTMLInputElement;
    this.newQuestion = {
      content: content.value,
      isSingle: !isMultiple.checked,
      answersCount: Number(answersCount.value)
    };
    this.answersCount=[];
    for(let i = 0; i < this.newQuestion.answersCount; i++){
      this.answersCount.push(i);
    }
    this.showFillQuestion = true;
  }

  onSubmit(){
    let question = new Question();
    question.Content = this.newQuestion.content;
    question.IsSingle = this.newQuestion.isSingle;
    question.TestId = Number(this.testId);

    let answers = [];
    for(let i = 0; i < this.newQuestion.answersCount; i++){
      let isCorrect = document.getElementById(`a_isCorrect_${i}`) as unknown as HTMLInputElement;
      let content = document.getElementById(`a_content_${i}`) as unknown as HTMLInputElement;
      let mark =  document.getElementById(`a_mark_${i}`) as unknown as HTMLInputElement;
      
      let answer = new Answer();
      answer.IsCorrect = isCorrect.checked;
      answer.Content = content.value;
      answer.Mark = Number(mark.value);
      answers.push(answer);
    }

    this.questionService.createQuestionForOldTest(question).pipe(
      concatMap(data=> {
          console.log(`question ${question.Content} done`);
          return from(answers).pipe(
              concatMap(answer => this.answerService.createAnswer(answer).pipe(
                  tap(data => console.log(`answer ${answer} done` ) ),
              )),
              finalize(() => {
                console.log("final");
              }),
          );
      })
    ).subscribe(data => { 
      this.showAddQuestion = false;
      this.showFillQuestion = false;
      this.loadTestInfoGet();
     });
  }

  save() {
    this.test.maxScore = Number(this.test.maxScore);
    this.test.maxTime = new Date(this.test.maxTime);
    this.testService.putTest(this.test).subscribe(data => this.router.navigateByUrl("/admin-panel"));
  }
}
