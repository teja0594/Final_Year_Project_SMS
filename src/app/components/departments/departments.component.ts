import { Component, OnInit } from '@angular/core';
import { SettingserviceService } from 'src/app/_services/settingservice.service';

export interface Tile {
  color: string;
  cols: string;
  rows: number;
  text: string;
  profile:string;
}
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
theme:any=[];
  tiles: Tile[] = [
    {text: 'CSE', cols: 'account_circle', rows: 1, color:'red',profile:'cse'},
    {text: 'ECE', cols: 'class', rows: 1, color: 'lightgreen',profile:'ece'},
    {text: 'EEE', cols: 'settings', rows: 1, color: 'grey',profile:'eee'},
    {text: 'ECM', cols: 'date_range', rows: 1, color: '#DDBDF1',profile:'ecm'},
    {text: 'ME', cols: 'bookmarks', rows: 1, color: 'lightyellow',profile:'me'},
    {text: 'CIVIL', cols: 'settings', rows: 1, color: 'grey',profile:'civil'},
  ];
  constructor(private settingservice:SettingserviceService) { }
  console(d:any)
  {
    console.log(d);
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
