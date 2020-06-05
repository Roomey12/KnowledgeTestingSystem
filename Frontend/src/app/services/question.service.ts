import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question';

@Injectable()
export class QuestionService {//experimental decorations

    private questionUrl = "http://localhost:58733/api/question/"

    constructor(private http: HttpClient) {
    }

    getQuestionById(id: number) {
        return this.http.get(this.questionUrl + id);
    }

    createQuestion(question: Question){
        return this.http.post(this.questionUrl, question);
    }

    deleteQuestion(questionId: number){
        return this.http.delete(this.questionUrl + questionId);
    }
}