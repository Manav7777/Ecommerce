import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/common/loader/loader.service';
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
  totalRecords;
  responseObj = {
    page: 1,
    pageSize: 3,
    nextPage: '',
  };
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
    private product: GetproductService,
    private loader: LoaderService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.paramID = this.route.snapshot.paramMap.get('id');
  }
  getProducts() {
    this.loader.showLoader();
    this.product.getProducts().subscribe((response: any) => {
      response.products.map((data) => {
        data.isCardbody_display = true;
        data.class = 'col-md-4 mb-3';
        data.cardWidth = '20rem';
        data.button = 'Add to Cart';
        data.viewDetail = 'View Product';
      });
      this.productDetails = response.products;
      this.loader.hideLoader();
    });
    if(!this.productDetails){
      this.loader.hideLoader();
    }
    this.totalRecords = this.productDetails.length;
  }
  applyFilter(event) {
    let checkboxChecked = event.target.checked;
    if (checkboxChecked) {
      this.loader.showLoader();
      this.product
        .getFilterProduct(event.target.value)
        .subscribe((response: any) => {
          response.products.map((data) => {
            data.isCardbody_display = true;
            data.class = 'col-md-4 mb-2';
            data.cardWidth = '20rem';
            data.button = 'Add to Cart';
            data.viewDetail = 'View Product';
          });
          setTimeout(() => {
            this.productDetails = response.products;
            this.loader.hideLoader();
          }, 800);
        });
    } else {
      this.getProducts();
    }
  }
}
