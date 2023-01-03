import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.scss'],
})
export class CartpageComponent implements OnInit {
  cartItemDetail: any;
  isLoading = false;
  constructor(private cartData: CartService) {}

  ngOnInit(): void {
    this.cartItemDetail = this.cartData.loadLocal();
    console.log('data', this.cartItemDetail);
  }
  removeDataFromCart(item) {
    return setTimeout(()=>{
      this.isLoading = true;
      this.cartData.removeItemFormCart(item);
    },200)
  }
}
