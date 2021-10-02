import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import {SettingserviceService} from '../../_services/settingservice.service';

export interface Tile {
  cols: string;
  rows: number;
  text: string;
  profile:string;
}
@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
theme:any=[];
  isLoggedIn=true;
  content: string;
colore:any='linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0))';
  tiles: Tile[] = [
    {text: 'Profile', cols: 'account_circle', rows: 1,profile:'profile'},
    {text: 'Registrations', cols: 'class', rows: 1, profile:'registration'},
    {text: 'Attendance', cols: 'date_range', rows: 1,profile:'attendance'},
    {text: 'Courses', cols: 'class', rows: 1, profile:'acedmic'},
    {text: 'Certifications', cols: 'credit_card', rows: 1, profile:'feepay'},
    {text: 'Results', cols: 'check_circle', rows: 1,profile:'results'},
  ];
  constructor(private userService: UserService,private settingservice:SettingserviceService) { }


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
