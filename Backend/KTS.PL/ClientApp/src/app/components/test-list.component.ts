import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Test } from '../models/test';


@Component({
    templateUrl: '../views/test-list.component.html',
    providers: [DataService]
})

export class TestListComponent implements OnInit {

    tests: Test[];             

    constructor(private dataService: DataService) { }

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
}