import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {RegisterComponent} from '../../register/register.component';
import {Temp2Component} from '../../temp2/temp2.component';
import { SettingserviceService } from 'src/app/_services/settingservice.service';
export interface Tile {
  color: string;
  cols: string;
  rows: number;
  text: string;
  profile:string;
}
@Component({
  selector: 'app-admintostudent',
  templateUrl: './admintostudent.component.html',
  styleUrls: ['./admintostudent.component.css']
})
export class AdmintostudentComponent implements OnInit {
theme:any=[];
  tiles: Tile[] = [
    {text: 'Student Details', cols: 'class', rows: 1, color: 'lightgreen',profile:'students'},
  ];
  constructor(private router:Router,private dialog: MatDialog,private settingservice:SettingserviceService) { }

  openDialog() {
    const dialogRef = this.dialog.open(Temp2Component, {
      width: '800px',
      panelClass: 'custom-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
    this.retrieveTheme();
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

}
