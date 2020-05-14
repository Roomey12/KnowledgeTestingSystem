import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable()
export class UserService {//experimental decorations

    private usersUrl = "api/users";;

    constructor(private http: HttpClient) {
    }

    getUsers() {
        return this.http.get(this.usersUrl);
    }

    register(user: User) {
        return this.http.post(this.usersUrl+"/register", user);
    }
}