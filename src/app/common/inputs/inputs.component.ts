import { Component, OnInit } from '@angular/core';
import { InputService } from './input.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  fileds:any=[]
  constructor(private inputFiled:InputService) { }

  ngOnInit(): void {
    this.fileds = this.inputFiled.formFields;
  }

}
