import { Component, OnInit } from '@angular/core';
import {SettingserviceService} from '../../../_services/settingservice.service';
export interface Tile {
  cols: string;
  rows: number;
  text: string;
  profile:string;
}
@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['./manage-courses.component.css']
})
export class ManageCoursesComponent implements OnInit {

  currentUser:any;
  content: string;
  theme:any=[];

  r:any;
    isLoggedIn=true;

    tiles: Tile[] = [
      {text: 'Add Course', cols: 'bookmarks', rows: 1, profile:'addcourse'},
      {text: 'Course List', cols: 'bookmarks', rows: 1, profile:'courselist'},
    ];
    constructor(private settingservice:SettingserviceService) { }

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
