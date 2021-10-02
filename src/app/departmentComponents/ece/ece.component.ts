import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SettingserviceService } from 'src/app/_services/settingservice.service';
import {SampleService} from '../../_services/sample.service';
@Component({
  selector: 'app-ece',
  templateUrl: './ece.component.html',
  styleUrls: ['./ece.component.css']
})
export class ECEComponent implements OnInit {
des=false;
student={
  name:"Teja",
  id:170030594
};
theme:any=[];
subjects:any=["DBMS","CN","OS","AI","COA"];
  constructor(private sampleservice:SampleService,private settingservice :SettingserviceService) { }
  fun:any=[this.student];



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



  onClick():void{

  }

}
