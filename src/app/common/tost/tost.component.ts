import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-tost',
  templateUrl: './tost.component.html',
  styleUrls: ['./tost.component.scss'],
  host: { class: 'toast-container position-fixed top-0 end-0 p-3', style: 'z-index: 1200' },

})
export class TostComponent implements OnInit {
	show = true;
  @Input() message;
  constructor(public toastService: ToastService) { }

  ngOnInit(): void {
  }
  // showSuccess() {
	// 	this.toastService.show(this.message, { classname: 'bg-success text-light', delay: 10000 });
	// }
  // ngOnDestroy(): void {
	// 	this.toastService.clear();
	// }
  isTemplate(toast){
    return toast.textOrTpl instanceof TemplateRef;
  }
}
