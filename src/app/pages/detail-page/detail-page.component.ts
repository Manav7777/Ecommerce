import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from 'src/app/common/loader/loader.service';
import { GetproductService } from 'src/app/service/getproduct.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {
  detailProduct = [];
  paramID: any;
  constructor(
    private route: ActivatedRoute,
    private productDetail: GetproductService,
    private loader: LoaderService
  ) {}

  ngOnInit(): void {
    this.loader.showLoader();
    this.paramID = this.route.snapshot.paramMap.get('id');
    setTimeout(()=>{
      this.productDetail.getProduct(this.paramID).subscribe((response) => {
        this.detailProduct.push(response);
        if (this.detailProduct) {
          this.loader.hideLoader();
        }
      });  
    },800)
  }
}
