import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestResult } from '../models/testResult';
import { FormBuilder, AbstractControl, Validators } from '@angular/forms';

@Injectable()
export class UserTestService {//experimental decorations

    private userTestUrl = "http://localhost:58733/api/usertest/";

    constructor(private fb: FormBuilder, private http: HttpClient) {
    }

    userTestModel = this.fb.group({
        Mark: ['', [this.markRangeValidator]],
        Time: ['', Validators.pattern('[0-5][0-9][:][0-5][0-9]')]
    });
    
    markRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
        if (control.value !== undefined && (isNaN(control.value) || control.value < 0 || control.value > 100)) {
            return { 'markRange': true };
        }
        return null;
    }

    getAllUserTests(){
        return this.http.get(this.userTestUrl);
    }

    getTopUserTests(count: number){
        return this.http.get(this.userTestUrl + `top/${count}`);
    }
    
    getUserTestsByUserId(id: string){
        return this.http.get(this.userTestUrl + `user/${id}`);
    }

    getUserTestById(id: string){
        return this.http.get(this.userTestUrl + id)
    }

    postTestResult(testResult: TestResult){
        return this.http.post(this.userTestUrl, testResult);
    }

    putUserTest(testResult: TestResult){
        return this.http.put(this.userTestUrl, testResult);
    }
    
    deleteUserTest(id: string){
        return this.http.delete(this.userTestUrl + id);
    }
}