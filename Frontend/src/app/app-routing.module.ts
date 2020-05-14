import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { TestStartComponent } from './test-start/test-start.component';
import { ExitTestStartGuard } from './test-start/exit.test-start.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserEditComponent } from './admin-panel/user-edit/user-edit.component';
import { UserListComponent } from './admin-panel/user-list/user-list.component';


const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full' },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'forbidden', component: ForbiddenComponent},
  { 
    path: 'admin-panel', component: AdminPanelComponent, canActivate: [AuthGuard], data: {permittedRoles: ['admin']},
    children: [
      { path: 'edit/:id', component: UserEditComponent },
      { path: 'user-list', component: UserListComponent }
    ]
  },
  { path: 'teststart/:id', component: TestStartComponent, canActivate: [AuthGuard], canDeactivate: [ExitTestStartGuard] },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
