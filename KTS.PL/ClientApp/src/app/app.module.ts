import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './components/app.component';
import { TestStartComponent } from './components/test-start.component';
import { TestListComponent } from './components/test-list.component';
import { RegistrationComponent } from './components/registration.component';
import { LoginComponent } from './components/login.component';
import { Login2Component } from './components/login2.component';


const appRoutes: Routes = [
    { path: '', component: TestListComponent },
    { path: 'teststart/:id', component: TestStartComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },
    { path: 'login2', component: Login2Component },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [BrowserModule, [CommonModule], FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule ],
    declarations: [AppComponent, TestListComponent, TestStartComponent, RegistrationComponent, LoginComponent, Login2Component],
    bootstrap: [AppComponent]
})

export class AppModule { }