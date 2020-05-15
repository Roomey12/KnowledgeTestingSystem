import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable()
export class UserService {//experimental decorations

    private userUrl = "http://localhost:58733/api/user/";

    constructor(private http: HttpClient) {
    }

    getUsers() {
        return this.http.get(this.userUrl);
    }

    getUser(id: string){
        return this.http.get(this.userUrl + id);
    }

    deleteUser(id: string){
        return this.http.delete(this.userUrl + id);
    }

    putUser(user: User){
        return this.http.put(this.userUrl, user);
    }
    
    getUserProfile() {
        return this.http.get(this.userUrl + 'profile');
    }
}