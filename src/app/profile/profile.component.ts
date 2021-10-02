import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import {StudentService} from '../_services/student.service';
import {SettingserviceService} from '../_services/settingservice.service';
import {MatDialog} from '@angular/material/dialog';
import {Alert5Component} from '../alerts/alert5/alert5.component';
  import { from } from 'rxjs';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  students:any;
  currentUser: any;
   theme:any=[];

  constructor(public dialog: MatDialog, private token: TokenStorageService,private studentservice:StudentService,private settingservice:SettingserviceService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();

    this.searchTitle();
    this.retrieveTheme();
  }
  openDialog() {
    const dialogRef = this.dialog.open(Alert5Component,{height:'500px',width:'1000px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  retrieveTheme(): void {
    this.settingservice.getAll()
      .subscribe(
        data => {
          this.theme = data;
          console.log(this.theme[0]);
        },
        error => {
          console.log(error);
        });
  }
  searchTitle(): void {
    this.studentservice.findByTitle(this.currentUser.username)
      .subscribe(
        data => {
          this.students = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
