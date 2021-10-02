import { Component, OnInit } from '@angular/core';
import { SettingserviceService } from 'src/app/_services/settingservice.service';

@Component({
  selector: 'app-cse',
  templateUrl: './cse.component.html',
  styleUrls: ['./cse.component.css']
})
export class CSEComponent implements OnInit {
theme:any=[];
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
