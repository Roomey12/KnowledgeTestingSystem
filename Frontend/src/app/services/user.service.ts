import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

    private userUrl = environment.apiUrl + 'user/';

    constructor(private fb: FormBuilder, private http: HttpClient) { }
    
    emailModel = this.fb.group({
        UserEmail: ['', [Validators.email]]
    });
      
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

    getUsersForPagination(pageNumber){
        return this.http.get(this.userUrl + `pagination?pageNumber=${pageNumber}`);
    }

    changeUserRole(user: User){
        return this.http.put(this.userUrl + 'changeRole', user);
    }
}