var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { forkJoin } from 'rxjs';
let TestStartComponent = class TestStartComponent {
    constructor(dataService, activeRoute) {
        this.dataService = dataService;
        this.loaded = false;
        this.sum = 0;
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }
    ngOnInit() {
        if (this.id) {
            this.getTest();
            this.loadTestInfoGet();
        }
    }
    loadTestInfoGet() {
        let testInfoGet = new Map();
        this.dataService.getTestStart(this.id)
            .subscribe((data) => {
            testInfoGet = data;
            this.loaded = true;
            this.fillQuestions(testInfoGet);
        });
    }
    fillQuestions(testInfoGet) {
        this.testInfo = new Map();
        for (let t in testInfoGet) {
            this.dataService.getQuestionById(Number(t))
                .subscribe((data1) => {
                this.fillTestInfo(testInfoGet, data1);
            });
        }
    }
    fillTestInfo(testInfo, question) {
        this.testInfo.set(question, testInfo[question["questionId"].toString()]);
    }
    onSubmit() {
        var minutes = this.sas.getMinutes() * 60000;
        var seconds = this.sas.getSeconds() * 1000;
        var rizn = minutes + seconds - this.myTime;
        var minutes1 = Math.floor((rizn % (1000 * 60 * 60)) / (1000 * 60));
        var seconds1 = Math.floor((rizn % (1000 * 60)) / 1000) + 1;
        let answers1 = document.getElementsByName("answer");
        let answers = answers1;
        const observables = [];
        for (let i = 0; i < answers1.length; i++) {
            if (answers[i].checked) {
                observables.push(this.dataService.getAnswerById(answers[i].value));
            }
        }
        forkJoin(observables).subscribe((data) => {
            this.sum = (data || []).reduce((res, ans) => res + ans["mark"], 0);
            alert(`Ваш результат: ${this.sum} балов.    Время прохождения теста: ${minutes1}м ${seconds1}с.`);
        });
    }
    getTest() {
        this.testId = Number(window.location.href[window.location.href.length - 1]);
        this.dataService.getTestById(this.testId)
            .subscribe((data) => {
            this.sas = new Date(data["maxTime"]);
            this.timer(data["maxTime"]);
        });
    }
    timer(data) {
        var d1 = new Date();
        var d2 = new Date(d1);
        var y = new Date(data);
        d2.setMinutes(d1.getMinutes() + y.getMinutes());
        d2.setSeconds(d2.getSeconds() + 2);
        var countDownDate = new Date(d2).getTime();
        // Update the count down every 1 second
        var x = setInterval(() => {
            // Get today's date and time
            var now = new Date().getTime();
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
            // Time calculations for days, hours, minutes and seconds
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // Display the result in the element with id="time"
            document.getElementById("time").innerHTML = minutes + "m " + seconds + "s ";
            if (distance < 60000) {
                var element = document.getElementById("countd");
                element.classList.remove("bg-gradient-2");
                element.classList.add("bg-gradient-3");
            }
            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("time").innerHTML = "Время вышло";
            }
            this.myTime = distance;
        }, 1000);
    }
};
TestStartComponent = __decorate([
    Component({
        templateUrl: '../views/test-start.component.html',
        styleUrls: ['../styles/test-start.component.css'],
        providers: [DataService]
    })
], TestStartComponent);
export { TestStartComponent };
//# sourceMappingURL=test-start.component.js.map