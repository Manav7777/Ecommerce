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
    let isLoading = true;
     setTimeout(()=>{
      localStorage.removeItem('user');
      isLoading =false
    return this.router.navigate(['/'])
     },800)
  }
}
