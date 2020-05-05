import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ValueService {//experimental decorations

    private url = "api/values";

    constructor(private http: HttpClient) {
    }
}