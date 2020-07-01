import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Test } from '../models/test';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { environment } from '../../environments/environment';

@Injectable()
export class TestService {

    private testUrl = environment.apiUrl + 'test/';

    constructor(private fb: FormBuilder, private http: HttpClient) {
    }

    testModel = this.fb.group({
        Title: ['', Validators.required],
        Description: ['', Validators.required],
        QuestionsCount: ['', [this.questionCountRangeValidator, Validators.required]],
        Time: ['', [Validators.pattern('[0-5][0-9][:][0-5][0-9]'), Validators.required]]
    });
    
    questionCountRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
        if (control.value !== undefined && (isNaN(control.value) || control.value < 0 || control.value > 50)) {
            return { 'questionCountRange': true };
        }
        return null;
    }

    getTests() {
        return this.http.get(this.testUrl);
    }

    getTestById(id: number) {
        return this.http.get(this.testUrl + id);
    }
    
    getTestStart(id: number) {
        return this.http.get(this.testUrl + `${id}/start`);
    }

    deleteTest(id: string){
        return this.http.delete(this.testUrl + id);
    }

    putTest(test: Test){
        return this.http.put(this.testUrl, test);
    }

    createTest(test: Test){
        return this.http.post(this.testUrl, test);
    }

    getTestsForPagination(pageNumber){
        return this.http.get(this.testUrl + `pagination?pageNumber=${pageNumber}&pageSize=4`);
    }

    getTestsByTitle(title){
        return this.http.get(this.testUrl + `title/${title}`);
    }
}