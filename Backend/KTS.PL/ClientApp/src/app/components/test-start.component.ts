import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Test } from '../models/test';
import { Question } from '../models/question';
import { Answer } from '../models/answer';
import { forkJoin } from 'rxjs';

@Component({
    templateUrl: '../views/test-start.component.html',
    styleUrls: ['../styles/test-start.component.css'],
    providers: [DataService]
})

export class TestStartComponent implements OnInit {

    testInfo: Map<Question, Answer[]>;
    id: number;
    loaded: boolean = false;
    sum: number = 0;
    myTime: number;
    testId: number;
    sas: Date;
    aaa: number;

    constructor(private dataService: DataService, activeRoute: ActivatedRoute) {
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }

    ngOnInit() {
        if (this.id) {
            this.getTest();
            this.loadTestInfoGet();
        }
    }

    loadTestInfoGet() {
        let testInfoGet = new Map<string, Answer[]>();
        this.dataService.getTestStart(this.id)
            .subscribe((data: Map<string, Answer[]>) => {
                testInfoGet = data; this.loaded = true;
                this.fillQuestions(testInfoGet);
            })
    }

    fillQuestions(testInfoGet: Map<string, Answer[]>) {
        this.testInfo = new Map<Question, Answer[]>();
        for (let t in testInfoGet) {
            this.dataService.getQuestionById(Number(t))
                .subscribe((data1: Question) => {
                    this.fillTestInfo(testInfoGet, data1);
                })
        }
    }

    fillTestInfo(testInfo: Map<string, Answer[]>, question: Question) {
        this.testInfo.set(question, testInfo[question["questionId"].toString()]);
    }

    onSubmit() {
        var minutes = this.sas.getMinutes() * 60000;
        var seconds = this.sas.getSeconds() * 1000;
        var rizn = minutes + seconds - this.myTime;

        var minutes1 = Math.floor((rizn % (1000 * 60 * 60)) / (1000 * 60));
        var seconds1 = Math.floor((rizn % (1000 * 60)) / 1000) + 1;
         
        let answers1 = document.getElementsByName("answer");
        let answers = answers1 as unknown as HTMLInputElement;

        const observables = [];
        for (let i = 0; i < answers1.length; i++) {
            if (answers[i].checked) {
                observables.push(this.dataService.getAnswerById(answers[i].value));
            }
        }

        forkJoin(observables).subscribe((data: Answer[]) => {
            this.sum = (data || []).reduce((res, ans: Answer) => res + ans["mark"], 0);
            alert(`Ваш результат: ${this.sum} балов.    Время прохождения теста: ${minutes1}м ${seconds1}с.`);
        });
    }

    getTest() {
        this.testId = Number(window.location.href[window.location.href.length - 1]);
        this.dataService.getTestById(this.testId)
            .subscribe((data: Test) => {
                this.sas = new Date(data["maxTime"]);
                this.timer(data["maxTime"]);
            })
    }

    timer(data: Date) {
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

}