import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { TokenStorageService } from '../../_services/token-storage.service';
@Component({
  selector: 'app-alert5',
  templateUrl: './alert5.component.html',
  styleUrls: ['./alert5.component.css']
})
export class Alert5Component implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor( private token: TokenStorageService) { }
   sgpa1=10;
   currentUser: any;
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

}
