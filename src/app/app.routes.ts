import { Routes } from '@angular/router';
import { authGuard } from './core/Guards/auth.guard';

export const routes: Routes = [
    {path:'',redirectTo:'userList',pathMatch:'full'},
    {path:'userList' ,canActivate:[authGuard], loadComponent:()=>import('./Components/user-list/user-list.component').then((m)=>m.UserListComponent),title:'User List'},
    {path:'userDetails/:id' ,canActivate:[authGuard], loadComponent:()=>import('./Components/user-details/user-details.component').then((m)=>m.UserDetailsComponent) , title:'User Details'},
    {path:'login',loadComponent:()=>import('./Components/login/login.component').then((m)=>m.LoginComponent)}
];
