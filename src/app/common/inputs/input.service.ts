import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  formFields:any;
  constructor() { }
  fileds: any = [
    {
      type: 'text',
      name: 'fristName',
      FormControlName: 'fristName',
      label: 'Frist Name',
      class: 'form-control mb-2',
      placeholder: 'Enter fristname..',
    },
    {
      type: 'text',
      name: 'lastName',
      FormControlName: 'lastName',
      label: 'Last Name',
      class: 'form-control mb-2',
      placeholder: 'Enter lastname..',
    },
    {
      type: 'email',
      name: 'email',
      FormControlName: 'email',
      label: 'Email',
      class: 'form-control mb-2',
      placeholder: 'Enter email..',
    },
    {
      type: 'text',
      name: 'address',
      FormControlName: 'address',
      label: 'Address',
      class: 'form-control mb-2',
      placeholder: 'Enter address..',
    },
    {
      type: 'text',
      name: 'address-2',
      FormControlName: 'addressTwo',
      label: 'Address line-2',
      class: 'form-control mb-2',
      placeholder: 'Enter address..',
    },
    {
      type: 'submit',
      name: 'submit',
      FormControlName: 'btn',
      class: 'mt-2 btn btn-success col-md-12',
      value: 'Purchase Order',
    },
  ];

  setFormFieds(fileds){
    if(fileds){
      this.formFields = fileds;
    }else{
      let message;
      message="There is no filed"
    }
  }

}
