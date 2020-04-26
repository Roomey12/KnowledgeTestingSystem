import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Test } from './test';

@Component({
    templateUrl: './test-list.component.html',
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