import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.router.navigate(['/listing'])
    },5000)
  }
}
