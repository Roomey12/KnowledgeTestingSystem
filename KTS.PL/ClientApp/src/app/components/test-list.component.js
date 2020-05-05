var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { AuthService } from '../services/auth.service';
let TestListComponent = class TestListComponent {
    constructor(dataService, authService) {
        this.dataService = dataService;
        this.authService = authService;
    }
    ngOnInit() {
        this.loadProducts(); // загрузка данных при старте компонента  
    }
    // получаем данные через сервис
    loadProducts() {
        this.dataService.getTests()
            .subscribe((data) => {
            this.tests = data;
        });
    }
    logout() {
        console.log("logout");
        this.authService.logout();
    }
};
TestListComponent = __decorate([
    Component({
        templateUrl: '../views/test-list.component.html',
        providers: [DataService, AuthService]
    })
], TestListComponent);
export { TestListComponent };
//# sourceMappingURL=test-list.component.js.map