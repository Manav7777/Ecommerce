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
  constructor(private route:ActivatedRoute,private productDetail:GetproductService) { }

  ngOnInit(): void {
    this.paramID = this.route.snapshot.paramMap.get('id');
    this.productDetail.getProduct(this.paramID).subscribe((response)=>{
      console.log('response',response)
      this.detailProduct.push(response)
    })
  }
  

}
