import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Injectable()
export class QuestionService {//experimental decorations

    private questionUrl = "http://localhost:58733/api/question/"

    constructor(private fb: FormBuilder, private http: HttpClient) {
    }

    questionModel = this.fb.group({
        Content: ['', Validators.required],
        AnswersCount: ['', [this.answerCountRangeValidator, Validators.required]]
    });

    answerCountRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
        if (control.value !== undefined && (isNaN(control.value) || control.value < 0 || control.value > 50)) {
            return { 'answerCountRange': true };
        }
        return null;
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