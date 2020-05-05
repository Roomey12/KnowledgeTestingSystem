var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './components/app.component';
import { TestStartComponent } from './components/test-start.component';
import { TestListComponent } from './components/test-list.component';
import { RegistrationComponent } from './components/registration.component';
import { LoginComponent } from './components/login.component';
import { Login2Component } from './components/login2.component';
const appRoutes = [
    { path: '', component: TestListComponent },
    { path: 'teststart/:id', component: TestStartComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },
    { path: 'login2', component: Login2Component },
    { path: '**', redirectTo: '/' }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        imports: [BrowserModule, [CommonModule], FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule],
        declarations: [AppComponent, TestListComponent, TestStartComponent, RegistrationComponent, LoginComponent, Login2Component],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map