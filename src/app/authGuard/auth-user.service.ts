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
     setTimeout(()=>{
      localStorage.removeItem('user');
    return this.router.navigate(['/'])
     },800)
  }
}
