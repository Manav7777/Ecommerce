import { Injectable } from '@angular/core';
import { LoaderService } from '../common/loader/loader.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItem: any = [];
  constructor(private loader:LoaderService) {}

  addToCartService(item) {
    this.cartItem.push(item);
    this.saveCart();
  }
  saveCart() {
    localStorage.setItem('CART_ITEMS', JSON.stringify(this.cartItem));
  }
  loadCart() {
    this.cartItem = JSON.parse(localStorage.getItem('CART_ITEMS')) ?? [];
  }
  clearCart() {
    this.cartItem = [];
    localStorage.removeItem('CART_ITEMS');
  }
  removeItemFormCart(item) {
    // const index = this.cartItem.findIndex((x) => x.id === item.id);
    let cartData = JSON.parse(localStorage.getItem('CART_ITEMS'));
    const index = cartData.filter((x) => x.id !== item.id);
    this.cartItem = index;
    // this.cartItem.splice(index, 1);
    this.saveCart();
    // window.location.reload();
    this.loader.hideLoader();
  }
  itemsInCart(item): boolean {
    return this.cartItem.findIndex((x) => x.id === item.id) > -1;
  }
  getItems() {
    return this.cartItem;
  }
  loadLocal() {
    return JSON.parse(localStorage.getItem('CART_ITEMS'));
  }
  getCartItem(){
    return this.cartItem;
  }
}
