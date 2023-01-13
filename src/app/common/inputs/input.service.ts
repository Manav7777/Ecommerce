import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  formFields:any;
  constructor() { }

  setFormFieds(fileds){
    if(fileds){
      this.formFields = fileds;
    }else{
      let message
      message="There is no filed"
    }
  }

}
