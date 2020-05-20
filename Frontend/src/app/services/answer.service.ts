import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AnswerService {//experimental decorations

    private answerUrl = "http://localhost:58733/api/answer";

    constructor(private http: HttpClient) {
    }

    getAnswerById(id: number) {
        return this.http.get(this.answerUrl + `/${id}`);
    }
}