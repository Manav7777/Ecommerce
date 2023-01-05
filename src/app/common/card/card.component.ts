import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() sections;
  cardActiveId;
  constructor() { }

  ngOnInit(): void {
  }
  setActiveCard(id){
    this.cardActiveId = id
  }
}
