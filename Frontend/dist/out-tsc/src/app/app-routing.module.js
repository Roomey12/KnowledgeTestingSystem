import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { TestStartComponent } from './test-start/test-start.component';
import { ExitTestStartGuard } from './test-start/exit.test-start.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserEditComponent } from './admin-panel/user/user-edit/user-edit.component';
import { UserListComponent } from './admin-panel/user/user-list/user-list.component';
import { AccountComponent } from './account/account.component';
import { TestInfoComponent } from './test-info/test-info.component';
import { TestListComponent } from './admin-panel/test/test-list/test-list.component';
import { TestEditComponent } from './admin-panel/test/test-edit/test-edit.component';
import { TestCreateComponent } from './admin-panel/test/test-create/test-create.component';
import { UserTestListComponent } from './admin-panel/user-test/user-test-list/user-test-list.component';
import { UserTestEditComponent } from './admin-panel/user-test/user-test-edit/user-test-edit.component';
import { UserTestCreateComponent } from './admin-panel/user-test/user-test-create/user-test-create.component';
import { ConfirmEmailComponent } from './user/confirm-email/confirm-email.component';
const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'user', component: UserComponent,
        children: [
            { path: 'registration', component: RegistrationComponent },
            { path: 'login', component: LoginComponent },
            { path: 'confirmemail', component: ConfirmEmailComponent }
        ]
    },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'forbidden', component: ForbiddenComponent, canActivate: [AuthGuard] },
    {
        path: 'admin-panel', component: AdminPanelComponent, canActivate: [AuthGuard], data: { permittedRoles: ['admin'] },
        children: [
            { path: 'user-edit/:id', component: UserEditComponent },
            { path: 'user-list', component: UserListComponent },
            { path: 'test-edit/:id', component: TestEditComponent },
            { path: 'test-list', component: TestListComponent },
            { path: 'test-create', component: TestCreateComponent },
            { path: 'user-test-list', component: UserTestListComponent },
            { path: 'user-test-edit/:id', component: UserTestEditComponent },
            { path: 'user-test-create', component: UserTestCreateComponent }
        ]
    },
    { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
    { path: 'teststart/:id', component: TestStartComponent, canActivate: [AuthGuard], canDeactivate: [ExitTestStartGuard] },
    { path: 'test/:id', component: TestInfoComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '/' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map