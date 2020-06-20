import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question';
import { environment } from '../../environments/environment';

@Injectable()
export class QuestionService {//experimental decorations

    private questionUrl = environment.apiUrl + 'question/';

    constructor(private http: HttpClient) {
    }

    getQuestionById(id: number) {
        return this.http.get(this.questionUrl + id);
    }

    createQuestionForNewTest(question: Question){
        return this.http.post(this.questionUrl + "newTest", question);
    }

    createQuestionForOldTest(question: Question){
        return this.http.post(this.questionUrl + "oldTest", question);
    }

    deleteQuestion(questionId: number){
        return this.http.delete(this.questionUrl + questionId);
    }

    editQuestion(question: Question){
        return this.http.put(this.questionUrl, question);
    }
}