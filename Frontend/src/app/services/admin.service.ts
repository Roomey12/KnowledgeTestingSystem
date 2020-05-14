import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable()
export class AdminService {//experimental decorations

    private adminUrl = "http://localhost:58733/api/admin/users/";

    constructor(private http: HttpClient) {
    }

    getUsers() {
        return this.http.get(this.adminUrl);
    }

    getUser(id: string){
        return this.http.get(this.adminUrl + id);
    }

    deleteUser(id: string){
        return this.http.delete(this.adminUrl + id);
    }

    putUser(user: User){
        return this.http.put(this.adminUrl, user);
    }
}