import { Component, OnInit } from '@angular/core';
import { InputService } from 'src/app/common/inputs/input.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  fileds:any=[
    {type:'text',name:'fristName',FormControlName:'fristName',label:'Frist Name',class:'form-control',placeholder:'Enter fristname..'},
    {type:'text',name:'lastName',FormControlName:'lastName',label:'Last Name',class:'form-control',placeholder:'Enter lastname..'},
    {type:'email',name:'email',FormControlName:'email',label:'Email',class:'form-control',placeholder:'Enter email..'},
    {type:'text',name:'address',FormControlName:'address',label:'Address',class:'form-control',placeholder:'Enter address..'},
    {type:'text',name:'address-2',FormControlName:'address-2',label:'Address line-2',class:'form-control',placeholder:'Enter address..'},

  ]
  constructor(private inputfields:InputService) { }

  ngOnInit(): void {
    this.inputfields.setFormFieds(this.fileds);
  }

}
