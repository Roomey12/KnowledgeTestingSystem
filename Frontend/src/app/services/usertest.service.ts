import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestResult } from '../models/testResult';

@Injectable()
export class UserTestService {//experimental decorations

    private userTestUrl = "http://localhost:58733/api/usertest/";

    constructor(private http: HttpClient) {
    }

    getUserTests(){
        return this.http.get(this.userTestUrl);
    }

    getUserTestsByUserId(id: string){
        return this.http.get(this.userTestUrl + id);
    }

    postTestResult(testResult: TestResult){
        console.log(testResult);
        return this.http.post(this.userTestUrl, testResult);
    }
}