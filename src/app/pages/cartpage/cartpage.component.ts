import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/common/loader/loader.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.scss'],
})
export class CartpageComponent implements OnInit {
  cartItemDetail: any;
  totalAmount: any = null;
  itemPrice;
  id;
  constructor(
    private cartData: CartService,
    private router: Router,
    private loader: LoaderService
  ) {}

  ngOnInit(): void {
    this.cartItemDetail = this.cartData.loadLocal();
    this.getTotal();
  }
  removeDataFromCart(item) {
    this.loader.showLoader();
    setTimeout(() => {
      this.cartData.removeItemFormCart(item);
      this.cartItemDetail = this.cartData.loadLocal();
    }, 200);
  }
  getTotal() {
    let total = 0;
    for (let i = 0; i < this.cartItemDetail.length; i++) {
      if (this.cartItemDetail[i].price) {
        total += this.cartItemDetail[i].price * this.cartItemDetail[i].qtyTotal;
        this.totalAmount = total;
      }
    }
  }
  onQtyChange(qty) {
    this.id = qty.id;
    let total = 0;
    for (let i = 0; i < this.cartItemDetail.length; i++) {
      if (this.cartItemDetail[i].id == qty.id) {
        total = this.cartItemDetail[i].price * qty.value;
        this.itemPrice = total;
      }
    }
  }
  gotoCheckout() {
    if (this.totalAmount) {
      this.router.navigate(['/checkout']);
    }
  }
}
