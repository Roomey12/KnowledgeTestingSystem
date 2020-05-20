import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionService {//experimental decorations

    private questionUrl = "http://localhost:58733/api/question"

    constructor(private http: HttpClient) {
    }

    getQuestionById(id: number) {
        return this.http.get(this.questionUrl + `/${id}`);
    }
}