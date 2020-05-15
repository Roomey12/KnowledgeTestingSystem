import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestService {//experimental decorations

    private testUrl = "http://localhost:58733/api/test";
    private questionUrl = "http://localhost:58733/api/question"
    private answerUrl = "http://localhost:58733/api/answer";

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
}