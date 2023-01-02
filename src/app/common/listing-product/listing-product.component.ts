import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-product',
  templateUrl: './listing-product.component.html',
  styleUrls: ['./listing-product.component.scss']
})
export class ListingProductComponent implements OnInit {

  @Input() products;
  cardActiveId;
  constructor() { }

  ngOnInit(): void {
  }
  setActiveCard(id){
    this.cardActiveId = id
  }
  addTOCart(id){
    console.log('cart',id)
  }
}
