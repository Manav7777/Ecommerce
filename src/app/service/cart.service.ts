import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItem: any = [];
  constructor() {}

  addToCartService(item) {
    this.cartItem.push(item);
  }
  saveCart() {
    localStorage.setItem('CART_ITEMS', JSON.stringify(this.cartItem));
  }
  loadCart() {
    this.cartItem = JSON.parse(localStorage.getItem('CART_ITEMS')) ?? [];
  }
  clearCart(item) {
    this.cartItem = [];
    localStorage.removeItem('CART_ITEMS');
  }
  removeItemFormCart(item) {
    const index = this.cartItem.findIndex((x) => x.id === item.id);
    if (index > -1) {
      this.cartItem.splice(index,1);
      this.saveCart();
    }
  }
  itemsInCart(item):boolean{
    return this.cartItem.findIndex(x => x.id === item.id) > -1;
  }
  getItems(){
    return this.cartItem
  }
}
