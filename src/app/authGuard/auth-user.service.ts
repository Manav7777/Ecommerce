import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  constructor(private router:Router) {}
  getAuth() {
    return !!localStorage.getItem('user');
  }
  logout(){
     localStorage.removeItem('user');
    return this.router.navigate(['/'])
  }
}
