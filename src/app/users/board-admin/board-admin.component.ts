import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import {SettingserviceService} from '../../_services/settingservice.service';
import {Router,NavigationStart,NavigationEnd,Event, RouterEvent} from '@angular/router';

export interface Tile {

  cols: string;
  rows: number;
  text: string;
  profile:string;
}
@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
indicator:any=true;
  content: string;
  theme:any=[];

r:any;
  isLoggedIn=true;
colore:any='linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0))';
  tiles: Tile[] = [
    {text: 'Students', cols: 'account_circle', rows: 1, profile:'sinfo'},
    {text: 'Results Upload', cols: 'bookmarks', rows: 1, profile:'departments'},
    {text: 'Attendance Registar', cols: 'date_range', rows: 1, profile:'attendanceregistar'},
    {text: 'Courses', cols: 'bookmarks', rows: 1, profile:'courses'},
    {text: 'Settings', cols: 'settings', rows: 1, profile:'settings'},
  ];
  constructor(private userService: UserService,private setting:SettingserviceService ,private router:Router) {
    this.router.events.subscribe((routerEvent:Event)=>
    {
      if(routerEvent instanceof NavigationStart)
      {
        this.indicator=true;
      }
      if(routerEvent instanceof NavigationEnd)
      {
        this.indicator=false;
      }

    });
   }
image2="";
  ngOnInit(): void {

    this.retrieveTheme();
  }
  retrieveTheme(): void {
    this.setting.getAll()
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
