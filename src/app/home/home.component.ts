import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 closeResult: string;
  constructor(private modalService:NgbModal) { }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  ngOnInit() {
  }

}
