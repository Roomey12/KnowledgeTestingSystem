import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Test } from '../models/test';

@Injectable()
export class TestService {

    private testUrl = "http://localhost:58733/api/test";

    constructor(private http: HttpClient) {
    }

    getTests() {
        return this.http.get(this.testUrl);
    }

    getTestById(id: number) {
        return this.http.get(this.testUrl + `/${id}`);
    }
    
    getTestStart(id: number) {
        return this.http.get(this.testUrl + `/${id}/start`);
    }

    deleteTest(id: string){
        return this.http.delete(this.testUrl + `/${id}`);
    }

    putTest(test: Test){
        console.log(test);
        return this.http.put(this.testUrl, test);
    }

    createTest(test: Test){
        console.log(test);
        return this.http.post(this.testUrl, test);
    }
}