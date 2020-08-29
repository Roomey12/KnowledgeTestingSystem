import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Test } from 'src/app/models/test';
import { Question } from 'src/app/models/question';
import { Answer } from 'src/app/models/answer';
import { from } from 'rxjs';
import { concatMap, tap, finalize } from 'rxjs/operators';
let TestCreateComponent = class TestCreateComponent {
    constructor(testService, questionService, answerService, router) {
        this.testService = testService;
        this.questionService = questionService;
        this.answerService = answerService;
        this.router = router;
        this.questions = [];
        this.hideQuestions = true;
    }
    ngOnInit() {
        this.test = new Test;
    }
    create() {
        let testTime = new Date();
        let Time = this.test.maxTime.split(":");
        testTime.setMinutes(Time[0]);
        testTime.setSeconds(Time[1]);
        testTime.setMilliseconds(0);
        this.test.maxTime = testTime;
        this.test.maxScore = Number(this.test.maxScore);
        for (let i = 0; i < this.test.maxScore; i++) {
            this.questions.push(i);
        }
        this.testCreated = true;
        console.log(this.hideQuestions);
    }
    next() {
        this.sas = new Map();
        for (let i = 0; i < this.questions.length; i++) {
            let q = document.getElementById(`q_${i + 1}`);
            let t = document.getElementById(`t_${i + 1}`);
            let a = document.getElementById(`a_${i + 1}`);
            let isSin = true;
            if (t.checked) {
                isSin = false;
            }
            let quest = {
                content: q.value,
                isSingle: isSin
            };
            let help = [];
            for (let j = 0; j < Number(a.value); j++) {
                help.push(j);
            }
            this.sas.set(quest, help);
        }
        this.questionsCreated = true;
        this.hideQuestions = false;
    }
    onSubmit() {
        this.testService.createTest(this.test).subscribe(data => {
            this.fillQuest();
        });
    }
    fillQuest() {
        let i = 0;
        from(this.sas).pipe(concatMap(item => {
            // get question info
            let q = document.getElementById(`q_${i + 1}`);
            let t = document.getElementById(`t_${i + 1}`);
            let isSin = true;
            if (t.checked) {
                isSin = false;
            }
            let question = new Question();
            question.Content = q.value;
            question.IsSingle = isSin;
            // get answers for this question
            let answers = [];
            for (let j of item[1]) {
                let isCorrect = document.getElementById(`a_isCorrect_${i}:${j}`);
                let content = document.getElementById(`a_content_${i}:${j}`);
                let mark = document.getElementById(`a_mark_${i}:${j}`);
                let answer = new Answer();
                answer.IsCorrect = isCorrect.checked;
                answer.Content = content.value;
                answer.Mark = Number(mark.value);
                answers.push(answer);
                j++;
            }
            i++;
            //post question
            return this.questionService.createQuestion(question).pipe(
            // executes answers only when question emits.
            concatMap(data => {
                console.log(`question ${question.Content} done`);
                //
                //post answers for question
                return from(answers).pipe(concatMap(answer => this.answerService.createAnswer(answer).pipe(tap(data => console.log(`answer ${answer} done`)))), finalize(() => {
                    console.log("done");
                }));
            }));
        }), finalize(() => {
            // call done function here.
            this.end = true;
            console.log(this.hideQuestions);
            console.log(this.testCreated);
            console.log("finalize");
        })).subscribe();
    }
};
TestCreateComponent = __decorate([
    Component({
        selector: 'app-test-create',
        templateUrl: './test-create.component.html',
        styleUrls: []
    })
], TestCreateComponent);
export { TestCreateComponent };
//# sourceMappingURL=test-create.component.js.map