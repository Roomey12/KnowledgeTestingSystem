import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Answer } from '../models/answer';

@Injectable()
export class AnswerService {//experimental decorations

    private answerUrl = "http://localhost:58733/api/answer/";

    constructor(private http: HttpClient) {
    }

    getAnswerById(id: number) {
        return this.http.get(this.answerUrl + id);
    }

    createAnswerForNewQuestion(answer: Answer){
        return this.http.post(this.answerUrl + 'newQuestion', answer);
    }

    createAnswerForOldQuestion(answer: Answer){
        return this.http.post(this.answerUrl + 'oldQuestion', answer);
    }

    getAnswersByQuestionId(id){
        return this.http.get(this.answerUrl + `question/${id}`);
    }

    deleteAnswer(id){
        return this.http.delete(this.answerUrl + id);
    }

    editAnswer(answer: Answer){
        return this.http.put(this.answerUrl, answer);
    }
}