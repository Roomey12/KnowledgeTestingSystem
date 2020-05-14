import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestResult } from '../models/testResult';

@Injectable()
export class TestService {//experimental decorations

    private testUrl = "http://localhost:58733/api/tests";
    private questionUrl = "http://localhost:58733/api/questions"
    private answerUrl = "http://localhost:58733/api/answers";
    private testResultUrl = "http://localhost:58733/api/userprofile";

    constructor(private http: HttpClient) {
    }

    getTests() {
        return this.http.get(this.testUrl);
    }

    getTestById(id: number) {
        return this.http.get(this.testUrl + `/${id}`);
    }
    getTestStart(id: number) {
        return this.http.get(this.testUrl + `/${id}/start`);
    }

    getQuestionById(id: number) {
        return this.http.get(this.questionUrl + `/${id}`);
    }

    getAnswerById(id: number) {
        return this.http.get(this.answerUrl + `/${id}`);
    }

    postTestResult(testResult: TestResult){
        console.log(testResult);
        return this.http.post(this.testResultUrl + '/usertest', testResult);
    }
}