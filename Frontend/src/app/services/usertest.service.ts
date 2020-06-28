import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestResult } from '../models/testResult';
import { environment } from '../../environments/environment';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Injectable()
export class UserTestService {

    private userTestUrl = environment.apiUrl + 'usertest/';

    constructor(private fb: FormBuilder, private http: HttpClient) {
    }

    userTestModel = this.fb.group({
        Username: ['', Validators.required],
        TestTitle: ['', Validators.required],
        Mark: ['', [this.markRangeValidator, Validators.required]],
        Time: ['', [Validators.pattern('[0-5][0-9][:][0-5][0-9]'), Validators.required]]
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

    postTestResultByAdmin(testResult: TestResult){
        return this.http.post(this.userTestUrl + "admin", testResult);
    }
    
    deleteUserTest(id: string){
        return this.http.delete(this.userTestUrl + id);
    }

    getUserTestsForPagination(pageNumber){
        return this.http.get(this.userTestUrl + `pagination?pageNumber=${pageNumber}`);
    }
}