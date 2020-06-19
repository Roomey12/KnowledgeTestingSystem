import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestResult } from '../models/testResult';
import { FormBuilder, AbstractControl, Validators } from '@angular/forms';

@Injectable()
export class UserTestService {//experimental decorations

    private userTestUrl = "http://localhost:58733/api/usertest/";

    constructor(private http: HttpClient) {
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