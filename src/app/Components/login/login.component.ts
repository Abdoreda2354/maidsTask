import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
constructor(private _Router: Router,private _ToastrService:ToastrService){}
Login:FormGroup=new FormGroup({
  email: new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('',[Validators.required])
})


loginForm(){
 
  if (this.Login.valid) {
    this._Router.navigate(['/userList']);
    localStorage.setItem('login',JSON.stringify("login"))
    this._ToastrService.success('You have been logged in successfully')
  }

}
}
