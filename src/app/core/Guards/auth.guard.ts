import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router)
  let checkLogin = localStorage.getItem('login')
  if (checkLogin != null) {
   return true
  } 
  else{
    _Router.navigateByUrl('/login')
    return false
  }
};
