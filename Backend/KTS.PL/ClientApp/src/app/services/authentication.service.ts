import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {//experimental decorations

    private url = "api/authentication";
    user: User;

    constructor(private http: HttpClient) {
    }


    login(username, password) {
        this.user = new User();
        this.user.Username = username;
        this.user.Password = password;
        console.log(this.user);
        return this.http.post(this.url, this.user);
    }

    //logout() {
    //    return this.http.post(this.url, 1);
    //}
}