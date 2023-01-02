import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetproductService } from 'src/app/service/getproduct.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  paramID: any;
  selectedIndex = 0;
  productDetails: any;
  isLoading = false;
  slides = [
    {
      image: `${environment.imageUrl}assets/BG-1.jpg`,
    },
    { image: `${environment.imageUrl}assets/BG-2.jpg` },
  ];
  sections = [
    {
      id: 1,
      image: `${environment.imageUrl}assets/1.jpg`,
      text: 'Mens Collections',
      class: 'col-md-5 offset-lg-1',
      isCardbody_display: 'false',
    },
    {
      id: 2,
      image: `${environment.imageUrl}assets/2.jpg`,
      text: 'Women Collections',
      class: 'col-md-5',
      isCardbody_display: 'false',
    },
  ];
  constructor(
    private route: ActivatedRoute,
    private product: GetproductService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.paramID = this.route.snapshot.paramMap.get('id');
  }
  getProducts() {
    this.isLoading = true;
    this.product.getProducts().subscribe((response: any) => {
      console.log('res', response);
      response.products.map((data) => {
        data.isCardbody_display = true;
        data.class = 'col-md-4 mb-3';
        data.cardWidth = '20rem';
        data.button = 'Add to Cart';
        data.viewDetail = 'View Product';
      });
      this.productDetails = response.products;
      this.isLoading = false;
    });
  }
}
