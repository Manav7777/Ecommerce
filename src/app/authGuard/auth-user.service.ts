import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../common/loader/loader.service';

@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  constructor(private router:Router,private loder:LoaderService) {}
  getAuth() {
    return !!localStorage.getItem('user');
  }
  logout(){
    let isLoading = true;
      localStorage.removeItem('user');
      isLoading =false;
      this.loder.hideLoader();
    return this.router.navigate(['/'])
  }
}
