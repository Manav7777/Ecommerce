import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BedgeService {
  bedgeValue:any;
  constructor() { }
  setBedge(){
    return this.bedgeValue = this.loadLocalStorageForBedge();
  }
  loadLocalStorageForBedge(){
    return JSON.parse(localStorage.getItem('CART_ITEMS'))
  }
}
