import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Test } from '../models/test';
import { AuthService } from '../services/auth.service';


@Component({
    templateUrl: '../views/test-list.component.html',
    providers: [DataService, AuthService]
})

export class TestListComponent implements OnInit {

    tests: Test[];             

    constructor(private dataService: DataService, private authService: AuthService) { }

    ngOnInit() {
        this.loadProducts();    // загрузка данных при старте компонента  
        
    }
    // получаем данные через сервис
    loadProducts() {
        this.dataService.getTests()
            .subscribe((data: Test[]) => {
                this.tests = data;
            });
    }
    logout(){
        console.log("logout");
        this.authService.logout();
    }
}