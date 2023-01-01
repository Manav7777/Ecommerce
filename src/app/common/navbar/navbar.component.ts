import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/authGuard/auth-user.service';

 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  
})
export class NavbarComponent implements OnInit {
  isDropdown = false;

  constructor(private authService:AuthUserService) {}

  ngOnInit(): void {}
  openDropDown() {
    this.isDropdown = !this.isDropdown;
  }
  onLogout(){
    return this.authService.logout();
  }
}
