import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { InputService } from 'src/app/common/inputs/input.service';
import { ModalService } from 'src/app/common/Model';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CheckoutComponent implements OnInit {
  purchaseForm;
  billingData: any = [];
  billDescription: any;
  
  isModelOpen = false;
  constructor(
    private inputfields: InputService,
    private fb: FormBuilder,
    private modalService: ModalService
  ) {}
  ngOnInit(): void {
    this.purchaseForm = this.fb.group({
      fristName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      addressTwo: ['', [Validators.required]],
    });
  }
  submit() {
   if(this.purchaseForm.status == 'VALID'){
    var BillingObj = {
      name:
        this.purchaseForm.get('fristName').value +
        ' ' +
        this.purchaseForm.get('lastName').value,
      email: this.purchaseForm.get('email').value,
      address: this.purchaseForm.get('address').value,
      addressTwo: this.purchaseForm.get('addressTwo').value,
    };

    this.billingData.push(BillingObj);
    console.log('Data',this.billingData)
    if (this.billingData) {
      console.log('working')
      this.isModelOpen = true;
      this.modalService.open('1');
    }
   }
  }

  cancleModel(){
    this.modalService.close('1')
  }
  openSameModel(id){
    console.log('ids',id)
    this.modalService.open(id);
  }
}
