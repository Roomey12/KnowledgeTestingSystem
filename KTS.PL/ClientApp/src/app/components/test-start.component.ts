import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Question } from '../models/question';
import { Answer } from '../models/answer';
import { forkJoin } from 'rxjs';

@Component({
    templateUrl: '../views/test-start.component.html',
    providers: [DataService]
})

export class TestStartComponent implements OnInit {

    testInfo: Map<Question, Answer[]>;
    id: number;
    loaded: boolean = false;
    sum: number = 0;
    
    constructor(private dataService: DataService, activeRoute: ActivatedRoute) {
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }

    ngOnInit() {
        if (this.id) {
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
        //console.log(this.testInfo);
    }

    onSubmit() {
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
            alert(`Ваш результат: ${this.sum}`);
        });
    }
}