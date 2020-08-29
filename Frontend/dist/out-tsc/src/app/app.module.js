import { __decorate } from "tslib";
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
import { UserFormComponent } from './admin-panel/user/user-form/user-form.component';
import { UserListComponent } from './admin-panel/user/user-list/user-list.component';
import { UserEditComponent } from './admin-panel/user/user-edit/user-edit.component';
import { AccountComponent } from './account/account.component';
import { TestService } from './services/test.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { UserTestService } from './services/usertest.service';
import { TestInfoComponent } from './test-info/test-info.component';
import { TestListComponent } from './admin-panel/test/test-list/test-list.component';
import { TestEditComponent } from './admin-panel/test/test-edit/test-edit.component';
import { TestFormComponent } from './admin-panel/test/test-form/test-form.component';
import { QuestionService } from './services/question.service';
import { AnswerService } from './services/answer.service';
import { TestCreateComponent } from './admin-panel/test/test-create/test-create.component';
import { UserTestListComponent } from './admin-panel/user-test/user-test-list/user-test-list.component';
import { UserTestFormUTComponent } from './admin-panel/user-test/user-test-form-ut/user-test-form-ut.component';
import { UserTestEditComponent } from './admin-panel/user-test/user-test-edit/user-test-edit.component';
import { UserTestFormMTComponent } from './admin-panel/user-test/user-test-form-mt/user-test-form-mt.component';
import { UserTestCreateComponent } from './admin-panel/user-test/user-test-create/user-test-create.component';
import { ConfirmEmailComponent } from './user/confirm-email/confirm-email.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
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
            AccountComponent,
            TestInfoComponent,
            TestListComponent,
            TestEditComponent,
            TestFormComponent,
            TestCreateComponent,
            UserTestListComponent,
            UserTestFormUTComponent,
            UserTestEditComponent,
            UserTestFormMTComponent,
            UserTestCreateComponent,
            ConfirmEmailComponent
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
            QuestionService,
            AnswerService,
            AuthService,
            UserTestService,
            ExitTestStartGuard, {
                provide: HTTP_INTERCEPTORS,
                useClass: AuthInterceptor,
                multi: true
            }
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map