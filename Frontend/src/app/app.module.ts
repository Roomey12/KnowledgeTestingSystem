import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { TestStartComponent } from './test-start/test-start.component';
import { ExitTestStartGuard } from './test-start/exit.test-start.guard';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UserFormComponent } from './admin-panel/user-form/user-form.component';
import { UserListComponent } from './admin-panel/user-list/user-list.component';
import { UserEditComponent } from './admin-panel/user-edit/user-edit.component';
import { AccountComponent } from './account/account.component';
import { TestService } from './services/test.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { UserTestService } from './services/usertest.service';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    HomeComponent,
    TestStartComponent,
    AdminPanelComponent,
    ForbiddenComponent,
    UserFormComponent,
    UserListComponent,
    UserEditComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    UserService,
    TestService, 
    AuthService, 
    UserTestService,
    ExitTestStartGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }