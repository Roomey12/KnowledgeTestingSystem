import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {//experimental decorations

    private testUrl = "api/tests";
    private questionUrl = "api/questions"
    private answerUrl = "api/answers"

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