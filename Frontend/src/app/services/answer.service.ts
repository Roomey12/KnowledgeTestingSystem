import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Answer } from '../models/answer';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Injectable()
export class AnswerService {//experimental decorations

    private answerUrl = "http://localhost:58733/api/answer/";

    constructor(private fb: FormBuilder, private http: HttpClient) {
    }

    answerModel = this.fb.group({
        Content: ['', Validators.required],
        Mark: ['', [this.markRangeValidator, Validators.required]]
    });
    
    markRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
        if (control.value !== undefined && (isNaN(control.value) || control.value < -100 || control.value > 100)) {
            return { 'markRange': true };
        }
        return null;
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