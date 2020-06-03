import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, CanDeactivate } from '@angular/router';
import { TestService } from '../services/test.service';
import { ComponentCanDeactivate } from './exit.test-start.guard';
import { Test } from '../models/test';
import { Question } from '../models/question';
import { Answer } from '../models/answer';
import { forkJoin, Observable } from 'rxjs';
import { TestResult } from '../models/testResult';
import { UserService } from '../services/user.service';
import { QuestionService } from '../services/question.service';
import { AnswerService } from '../services/answer.service';
import { UserTestService } from '../services/usertest.service';

@Component({
  selector: 'app-test-start',
  templateUrl: './test-start.component.html',
  styleUrls: ['./test-start.component.css']
})
export class TestStartComponent implements OnInit, ComponentCanDeactivate {

  testInfo: Map<Question, Answer[]>;
  testName: string;
  loaded: boolean = false;
  sum: number = 0;
  timeLeft: number;
  submitted: boolean = false;
  localstorageTime: number;
  localstorageTimeSet: boolean;
  testId: number;
  testResult: TestResult;
  testMaxTime: Date;
  interval;
  userDetails;

  all;
  observables;
  minutes;
  seconds;
  answers;
  answers1;


  constructor(private testService: TestService, 
              private userService: UserService, 
              private questionService: QuestionService,
              private answerService: AnswerService,
              private userTestService: UserTestService,
              private activeRoute: ActivatedRoute) {
    this.testId = Number.parseInt(activeRoute.snapshot.params["id"]);
  }

  ngOnInit(){
      if (this.testId) {
        this.getTest();
        this.loadTestInfoGet();
        this.fillLocalstorageTime();
        this.userService.getUserProfile().subscribe(
          res => {
            this.userDetails = res;
          },
          err => {
            console.log(err);
          },
        );
    }
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

  onSubmit() {
    if(!this.submitted){
      this.endTest1();
      if(this.observables.length > 0){
        this.endTest2();
      }
      else{
        alert("Вы не ответили ни на один вопрос, тест не может быть завершен!");
      }
    }
  }

  getTest() {
    this.testService.getTestById(this.testId)
        .subscribe((data: Test) => {
            this.testName = data["description"];
            this.testMaxTime = new Date(data["maxTime"]);
            this.timer(data["maxTime"]);
        })
  }

  timer(data: Date) {
    var d1 = new Date();
    var d2 = new Date(d1);
    var y = new Date(data);
    d2.setMinutes(d1.getMinutes() + y.getMinutes());
    d2.setSeconds(d2.getSeconds() + y.getSeconds() + 2);
    var countDownDate = new Date(d2).getTime();

    var startDate = new Date().getTime();
    var passed = 0;
    // Update the count down every 1 second
    this.interval = setInterval(() => {
        // Get today's date and time
        var now = new Date().getTime();
        var remaining = 0;
        // Find the dremaining between now and the count down date
        if(this.localstorageTimeSet == true){
          passed = countDownDate - startDate - this.localstorageTime;
          this.localstorageTimeSet = false;
        }
        remaining = countDownDate - now - passed;

        // Time calculations for days, hours, minutes and seconds
        var minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((remaining % (1000 * 60)) / 1000);

        // Display the result in the element with id="time"
        document.getElementById("time").innerHTML = minutes + "m " + seconds + "s ";

        if (remaining < 60000) {
            var element = document.getElementById("countd");
            element.classList.remove("bg-gradient-4");
            element.classList.add("bg-gradient-3");
        }
        // If the count down is finished, write some text
        if (remaining < 0) {
            this.endTest1();
            this.endTest2();
            document.getElementById("time").innerHTML = "Время вышло";
        }

        this.timeLeft = remaining;
    }, 1000);
  }

  @HostListener('window:beforeunload', ['$event']) onBeforeUnload(event) {
    localStorage.setItem(`time_${this.testId}`, this.timeLeft.toString());  
    clearInterval(this.interval);
    if(this.submitted){
      localStorage.removeItem(`time_${this.testId}`);
    }
    return false;
  }

  canDeactivate() : boolean | Observable<boolean>{
    if(!this.submitted){
      var result  = confirm("Вы не закончили прохождение теста, вы уверены что хотите покинуть страницу? В результат теста запишется ваш текущий результат.");
      if(result == true){
        this.endTest1();
        this.endTest2();
        localStorage.removeItem(`time_${this.testId}`);
        clearInterval(this.interval);
      }
      return result;
    }
    else{
      localStorage.removeItem(`time_${this.testId}`);
      clearInterval(this.interval);
      return true;
    }
  }

  fillLocalstorageTime(){
    this.localstorageTime = Number(localStorage.getItem(`time_${this.testId}`));
    if(this.localstorageTime != 0){
      this.localstorageTimeSet = true;
    }
  }

  endTest1(){
    var min = this.testMaxTime.getMinutes() * 60000;
    var sec = this.testMaxTime.getSeconds() * 1000;
    var rizn = min + sec - this.timeLeft;

    this.minutes = Math.floor((rizn % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((rizn % (1000 * 60)) / 1000) + 1;
     
    this.answers1 = document.getElementsByName("answer");
    this.answers = this.answers1 as unknown as HTMLInputElement;

    this.all = [];
    this.observables = [];
    for (let i = 0; i < this.answers1.length; i++) {
        if (this.answers[i].checked) {
            this.observables.push(this.answerService.getAnswerById(this.answers[i].id));
        }
        this.all.push(this.answerService.getAnswerById(this.answers[i].id));
    }
  }

  endTest2(){
    if(this.observables.length == 0){
      this.sum = 0;
      this.fillTestResult();
      this.endTest3();
    }
    else{
      forkJoin(this.observables).subscribe((data: Answer[]) => {
        this.sum = (data || []).reduce((res, ans: Answer) => res + ans["mark"], 0);
        if(this.sum < 0){
          this.sum = 0;
        }
        this.fillTestResult();
  
        if(this.timeLeft > 0){
          var result = confirm("Вы уверены что хотите завершить прохождение теста?");
          if(result){
            this.endTest3();
          }
        }
        else{
          this.endTest3();
        }
      });
    }
  }

  endTest3(){
    forkJoin(this.all).subscribe((data: Answer[]) => {
      if(window.location.href.toString().includes("teststart")){
        for(let i = 0; i < data.length; i++){
          if(data[i]["isCorrect"]){
            document.getElementById(`check_${this.answers[i].id}`).classList.add("correct");
          }
        }
      }
    });

    document.getElementById('subButton').innerHTML = "Результат";
    this.submitted = true;
    clearInterval(this.interval);
    this.userTestService.postTestResult(this.testResult).subscribe(data => console.log("Finish"));
  }

  fillTestResult(){
    var timeResult = new Date();
    timeResult.setMinutes(this.minutes);
    timeResult.setSeconds(this.seconds);
    timeResult.setMilliseconds(0);
    this.testResult = new TestResult();
    this.testResult.Mark = Number(this.sum.toFixed(2));
    this.testResult.TestId = this.testId;
    this.testResult.Time = timeResult;
    this.testResult.UserId = this.userDetails.id;
  }
}