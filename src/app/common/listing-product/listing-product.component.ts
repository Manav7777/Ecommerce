import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { LoaderService } from '../loader/loader.service';
import { BedgeService } from '../navbar/bedge.service';
import { ToastService } from '../tost/toast.service';

@Component({
  selector: 'app-listing-product',
  templateUrl: './listing-product.component.html',
  styleUrls: ['./listing-product.component.scss'],
})
export class ListingProductComponent implements OnInit {
  message: string;
  isToast = false;
  cartItem = [];
  @Input() products;
  cardActiveId;
  constructor(
    private setCart: CartService,
    public toastService: ToastService,
    private bedgeS: BedgeService,
    private loader: LoaderService
  ) {}

  setActiveCard(id) {
    this.cardActiveId = id;
  }
  addTOCart(item) {
    if (!this.setCart.itemsInCart(item)) {
      this.loader.showLoader();
      item.qtyTotal = 1;
      this.setCart.addToCartService(item);
      this.cartItem = [...this.setCart.getItems()];
      if (this.cartItem) {
        setTimeout(() => {
        this.isToast = true;
        this.toastService.show('Item Added in cart', {
          classname: 'bg-success text-light',
          delay: 10000,
        });
        this.message = 'Item added in Cart!!';        
          this.bedgeS.setBedge();
          this.loader.hideLoader();
        }, 400);
      }
    }
  }
  ngOnInit(): void {
    this.setCart.loadCart();
    this.cartItem = this.setCart.getItems();
  }
}
