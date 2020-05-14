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

@Component({
  selector: 'app-test-start',
  templateUrl: './test-start.component.html',
  styleUrls: ['./test-start.component.css']
})
export class TestStartComponent implements OnInit, ComponentCanDeactivate {

  testInfo: Map<Question, Answer[]>;
  id: number;
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


  constructor(private testService: TestService, private service: UserService, private router: Router, activeRoute: ActivatedRoute) {
    this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
  }

  ngOnInit(){
      if (this.id) {
        this.getTest();
        this.loadTestInfoGet();
        this.fillLocalstorageTime();
        this.service.getUserProfile().subscribe(
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
    this.testService.getTestStart(this.id)
        .subscribe((data: Map<string, Answer[]>) => {
            testInfoGet = data; this.loaded = true;
            this.fillQuestions(testInfoGet);
        })
  }

  fillQuestions(testInfoGet: Map<string, Answer[]>) {
    this.testInfo = new Map<Question, Answer[]>();
    for (let t in testInfoGet) {
        this.testService.getQuestionById(Number(t))
            .subscribe((data1: Question) => {
                this.fillTestInfo(testInfoGet, data1);
            })
    }
  }

  fillTestInfo(testInfo: Map<string, Answer[]>, question: Question) {
    this.testInfo.set(question, testInfo[question["questionId"].toString()]);
  }

  onSubmit() {
    var minutes = this.testMaxTime.getMinutes() * 60000;
    var seconds = this.testMaxTime.getSeconds() * 1000;
    var rizn = minutes + seconds - this.timeLeft;

    var minutes1 = Math.floor((rizn % (1000 * 60 * 60)) / (1000 * 60));
    var seconds1 = Math.floor((rizn % (1000 * 60)) / 1000) + 1;
     
    let answers1 = document.getElementsByName("answer");
    let answers = answers1 as unknown as HTMLInputElement;

    const observables = [];
    for (let i = 0; i < answers1.length; i++) {
        if (answers[i].checked) {
            observables.push(this.testService.getAnswerById(answers[i].value));
        }
    }
    
    if(observables.length > 0){
      forkJoin(observables).subscribe((data: Answer[]) => {
        this.sum = (data || []).reduce((res, ans: Answer) => res + ans["mark"], 0);
        if(this.sum < 0){
          this. sum = 0;
        }
        var timeResult = new Date();
        timeResult.setMinutes(minutes1);
        timeResult.setSeconds(seconds1);
        this.testResult = new TestResult();
        this.testResult.Mark = Number(this.sum.toFixed(2));
        this.testResult.TestId = this.testId;
        this.testResult.Time = timeResult;
        this.testResult.UserId = this.userDetails.id;
        console.log(this.testResult);
        var result = confirm("Вы уверены что хотите завершить прохождение теста?");
        if(result == true){
          this.submitted = true;
          clearInterval(this.interval);
          //this.router.navigateByUrl('/home');
          //this.testService.postTestResult(this.testResult);
        }
      });
    }
    else{
      alert("Вы не ответили ни на один вопрос, тест не может быть завершен!");
    }
  }

  getTest() {
    this.testId = Number(window.location.href[window.location.href.length - 1]);
    this.testService.getTestById(this.testId)
        .subscribe((data: Test) => {
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
            element.classList.remove("bg-gradient-2");
            element.classList.add("bg-gradient-3");
        }
        // If the count down is finished, write some text
        if (remaining < 0) {
            clearInterval(this.interval);
            document.getElementById("time").innerHTML = "Время вышло";
        }

        this.timeLeft = remaining;
    }, 1000);
  }

  @HostListener('window:beforeunload', ['$event']) onBeforeUnload(event) {
    localStorage.setItem(`time_${this.testId}`, this.timeLeft.toString());  
    clearInterval(this.interval);
    return false;
  }

  canDeactivate() : boolean | Observable<boolean>{
    if(this.submitted == false){
      var result  = confirm("Вы не закончили прохождение теста, вы уверены что хотите покинуть страницу? Введенные данные не сохранятся");
      if(result == true){
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
}