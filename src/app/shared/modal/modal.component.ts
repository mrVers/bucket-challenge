import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector   : 'bc-modal',
  templateUrl: './modal.component.html',
  styleUrls  : [ './modal.component.scss' ]
})
export class ModalComponent implements OnInit {

  @ViewChild('modal') public modal: ModalDirective;

  constructor() {
  }

  ngOnInit() {
  }

  public show(): void {
    this.modal.show();
  }

  public hide(): void {
    this.modal.hide();
  }

}
