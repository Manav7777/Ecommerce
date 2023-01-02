import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.scss']
})
export class CartpageComponent implements OnInit {

  @Input() cartItem;
  constructor() { }

  ngOnInit(): void {
    console.log('on-cart',this.cartItem)
  }

}
