import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Test } from 'src/app/models/test';
import { Question } from 'src/app/models/question';
import { Answer } from 'src/app/models/answer';
import { QuestionService } from 'src/app/services/question.service';

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

  constructor(private testService: TestService, 
              private router: Router, 
              private questionService: QuestionService,
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
    console.log(this.testInfo);
  }

  save() {
    this.testService.putTest(this.test).subscribe(data => this.router.navigateByUrl("/admin-panel"));
  }
}
