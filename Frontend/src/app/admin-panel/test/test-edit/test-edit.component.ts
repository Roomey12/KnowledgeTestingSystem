import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Test } from 'src/app/models/test';
import { Question } from 'src/app/models/question';
import { Answer } from 'src/app/models/answer';
import { QuestionService } from 'src/app/services/question.service';
import { concatMap, tap, finalize } from 'rxjs/operators';
import { AnswerService } from 'src/app/services/answer.service';
import { from } from 'rxjs';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { ToastrService } from 'ngx-toastr';

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
  questIdForNewAns;
  newQuestion;
  answersCount;

  constructor(public testService: TestService, 
              private router: Router, 
              private questionService: QuestionService,
              private answerService: AnswerService,
              private toastr: ToastrService,
              activeRoute: ActivatedRoute) {
      this.testId = activeRoute.snapshot.params["id"];
  }

  ngOnInit(){
    if(this.testId){
      this.testService.testModel.reset();
      this.loadTest(true);
    }
  }

  loadTest(withQA: boolean){
    this.testService.getTestById(this.testId)
      .subscribe((data: Test) =>{
          this.test = data;
          if(withQA == true){
            this.loadTestInfoGet();
          }
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
    this.questionService.deleteQuestion(questionId).subscribe(data => {
       this.loadTestInfoGet();
       this.toastr.success("Вопрос был удален.","Успешно.");
      });
  }

  deleteAnswer(answerId: number){
    this.answerService.deleteAnswer(answerId).subscribe(data => { 
      this.loadTestInfoGet();
      this.toastr.success("Ответ был удален.","Успешно.");
    });
  }

  addQuestion(){
    this.showAddQuestion=true;
  }

  next(){
    let isMultiple = document.getElementById('isMultiple') as HTMLInputElement;
    let content = document.getElementById('content') as HTMLInputElement;
    let answersCount = document.getElementById('answersCount') as HTMLInputElement;
    let answerDescription = document.getElementById('ansDesc') as HTMLInputElement;
    this.newQuestion = {
      content: content.value,
      isSingle: !isMultiple.checked,
      answersCount: Number(answersCount.value),
      answerDescription: answerDescription.value
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
    question.AnswerDescription = this.newQuestion.answerDescription;
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
              concatMap(answer => this.answerService.createAnswerForNewQuestion(answer).pipe(
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
      this.toastr.success("Вопрос был добавлен.","Успешно.");
     });
  }

  saveTest() {
    console.log(this.test.maxTime);
    let title = document.getElementById('title') as HTMLInputElement;
    let description = document.getElementById('description') as HTMLInputElement;
    let maxTime = document.getElementById('maxTime') as HTMLInputElement;
    let testTime = new Date();
    if(maxTime.value != ""){
      let Time = maxTime.value.split(":");
      testTime.setMinutes(Number(Time[0]));
      testTime.setSeconds(Number(Time[1]));
      testTime.setMilliseconds(0); 
      this.test.maxTime = testTime;
    }
    this.test.title = title.value == "" ? this.test.title : title.value;
    this.test.description = description.value == "" ? this.test.description : description.value;
    console.log(this.test.maxTime);
    this.testService.putTest(this.test).subscribe(data => {
        this.toastr.success("Тест был изменен.", "Успешно.");
        this.testService.testModel.reset();
        this.loadTest(false);
    });
  }

  editQuestion(questionId){
    let question = new Question();
    let content = document.getElementById(`q_content_${questionId}`) as HTMLInputElement;
    let isSingle = document.getElementById(`q_isSingle_${questionId}`) as HTMLInputElement;
    let answerDescription = document.getElementById(`q_ansDesc_${questionId}`) as HTMLInputElement;
    question.QuestionId = questionId;
    question.Content = content.value;
    question.AnswerDescription = answerDescription.value;
    question.TestId = Number(this.testId);
    question.IsSingle = isSingle.value=="true" ? true : false;
    console.log(question);
    this.questionService.editQuestion(question).subscribe(data => { 
      this.answerService.getAnswersByQuestionId(questionId).subscribe((data: Answer[]) => {
        let answers = data;
        answers.forEach(el => {
          let answer = new Answer();
          let content = document.getElementById(`a_content_${el["answerId"]}`) as HTMLInputElement;
          let isCorrect = document.getElementById(`a_isCorrect_${el["answerId"]}`) as HTMLInputElement;
          let mark = document.getElementById(`a_mark_${el["answerId"]}`) as HTMLInputElement;
          answer.QuestionId = questionId;
          answer.AnswerId = el["answerId"];
          answer.Content = content.value;
          answer.IsCorrect = isCorrect.checked;
          answer.Mark = Number(mark.value);
          this.answerService.editAnswer(answer).subscribe(data => { 
            this.loadTest(false);
          });
        })
        this.toastr.success("Данные по вопросу были изменены.","Успешно.");
      });
    });
  }

  addAnswer(questionId){
    this.questIdForNewAns = questionId == this.questIdForNewAns ? null : questionId;
  }

  saveNewAnswer(){
    let answer = new Answer();
    let content = document.getElementById('a_content_new') as HTMLInputElement;
    let mark = document.getElementById('a_mark_new') as HTMLInputElement;
    let isCorrect = document.getElementById('a_isCorrect_new') as HTMLInputElement;
    answer.Content = content.value;
    answer.IsCorrect = isCorrect != null ? isCorrect.checked : false;
    answer.Mark = mark != null ? Number(mark.value) : 0;
    answer.QuestionId = Number(this.questIdForNewAns);
    this.answerService.createAnswerForOldQuestion(answer).subscribe(data => { 
      this.questIdForNewAns = null;
      this.loadTestInfoGet();
    });
  }
}
