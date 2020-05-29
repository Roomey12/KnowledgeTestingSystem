import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Answer } from '../models/answer';

@Injectable()
export class AnswerService {//experimental decorations

    private answerUrl = "http://localhost:58733/api/answer";

    constructor(private http: HttpClient) {
    }

    getAnswerById(id: number) {
        return this.http.get(this.answerUrl + `/${id}`);
    }

    createAnswer(answer: Answer){
        console.log(answer);
        return this.http.post(this.answerUrl, answer);
    }
}