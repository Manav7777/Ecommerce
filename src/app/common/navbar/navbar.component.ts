import { AfterContentInit, Component, HostListener, Inject, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/authGuard/auth-user.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent implements OnInit,AfterContentInit {
  isDropdown = false;

  constructor(private authService:AuthUserService) { }
  ngOnInit(): void {}
  openDropDown() {
    this.isDropdown = !this.isDropdown;
  }
  onLogout(){
    return this.authService.logout();
  }
  ngAfterContentInit() {
    (() => {
      let nav = document.getElementById('nav');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 1.5) {
          nav.classList.add("shadow");
        } else {
          nav.classList.remove("shadow");
        }
      });
    })()
  }
}
