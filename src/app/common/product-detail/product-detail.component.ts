import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { BedgeService } from '../navbar/bedge.service';
import { ToastService } from '../tost/toast.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  cartItem = [];
  isToast=false;
  @Input() productDetail;
  constructor(private setCart: CartService,public toastService: ToastService,private bedgeS:BedgeService) {}

  ngOnInit(): void {}
  addProductOnCart(item){
    if (!this.setCart.itemsInCart(item)) {
      item.qtyTotal = 1;
      this.setCart.addToCartService(item);
      this.cartItem = [...this.setCart.getItems()];
      if (this.cartItem) {
        this.isToast = true;
        this.toastService.show('Item Added in Cart', { classname: 'bg-success text-light', delay: 10000 });
        this.bedgeS.setBedge()
      }
      // window.location.reload();
    }
  }
}
