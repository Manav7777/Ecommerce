import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, HostListener, Inject, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/authGuard/auth-user.service';
import { CartService } from 'src/app/service/cart.service';
import { BedgeService } from './bedge.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent implements OnInit,AfterContentInit,AfterViewChecked {
  isDropdown = false;
  badge:any;
  bedgeList:any = 0

  constructor(private authService:AuthUserService,private cart:CartService,private bedgeService:BedgeService) { }
  ngOnInit(): void {
    // let bg = this.cart.getCartItem();
  }
  openDropDown() {
    this.isDropdown = !this.isDropdown;
  }
  onLogout(){
    return this.authService.logout();
  }
  ngAfterViewChecked(){
    this.loadBedge()
  }
  loadBedge(){
    if(this.bedgeService.setBedge()){
      let cartList = this.bedgeService.setBedge();
      this.bedgeList = cartList.length
    }else{
      this.bedgeList = 0;
     }
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
