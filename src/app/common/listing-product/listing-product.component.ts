import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-listing-product',
  templateUrl: './listing-product.component.html',
  styleUrls: ['./listing-product.component.scss']
})
export class ListingProductComponent implements OnInit {

  cartItem=[]
  @Input() products;
  cardActiveId;
  constructor(private setCart:CartService) { }

  setActiveCard(id){
    this.cardActiveId = id
  }
  addTOCart(item){
    if(!this.setCart.itemsInCart(item)){
      item.qtyTotal = 1;
      this.setCart.addToCartService(item);
      this.cartItem = [...this.setCart.getItems()];
      console.log('products',this.cartItem)
    }
  }
  
  ngOnInit(): void {
    this.setCart.loadCart();
    this.cartItem = this.setCart.getItems(); 
  }
}
