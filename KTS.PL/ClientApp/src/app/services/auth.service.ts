import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })

export class AuthService {

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private url = "api/users/authenticate";
    user: User;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        this.user = new User();
        this.user.Username = username;
        this.user.Password = password;
        console.log("login post method");
        return this.http.post<any>(this.url, this.user)//{ username, password })
            .pipe(map(user => {
                console.log("2");
                console.log(user);
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        console.log(this.currentUserValue);
        console.log(this.currentUser);
        console.log(this.currentUserSubject);
        console.log("logout in auth service");
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}