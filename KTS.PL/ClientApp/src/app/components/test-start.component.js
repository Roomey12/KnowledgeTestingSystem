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
        //console.log(this.testInfo);
    }
    onSubmit() {
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
            alert(`Ваш результат: ${this.sum}`);
        });
    }
};
TestStartComponent = __decorate([
    Component({
        templateUrl: '../views/test-start.component.html',
        providers: [DataService]
    })
], TestStartComponent);
export { TestStartComponent };
//# sourceMappingURL=test-start.component.js.map