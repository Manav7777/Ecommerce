import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetproductService } from 'src/app/service/getproduct.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  detailProduct=[];
  paramID:any;
  isLoading:boolean;
  constructor(private route:ActivatedRoute,private productDetail:GetproductService) { }

  ngOnInit(): void {
    this.isLoading=true;
    this.paramID = this.route.snapshot.paramMap.get('id');
    this.productDetail.getProduct(this.paramID).subscribe((response)=>{
      this.detailProduct.push(response);
      if(this.detailProduct){
        this.isLoading=false;
      }
    })
  }


}
