import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TestStartComponent } from './test-start.component';
import { TestListComponent } from './test-list.component';


const appRoutes: Routes = [
    { path: '', component: TestListComponent },
    { path: 'teststart/:id', component: TestStartComponent },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [BrowserModule, [CommonModule], FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, TestListComponent, TestStartComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }