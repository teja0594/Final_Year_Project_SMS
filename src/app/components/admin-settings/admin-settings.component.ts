import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import {SettingserviceService} from '../../_services/settingservice.service';
import {StudentService} from '../../_services/student.service';
interface Food {
  value: string;
  viewValue: string;
  image:String;
  color:String;
}


export interface Roles {
  color: string;
}
@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.css']
})
export class AdminSettingsComponent implements OnInit {
  roles:any;
  selected:any;
  themes:any=[];
  selectedTheme:any;
  selectedCar: string;
  tid="admintheme";

  foods: Food[] = [
    {value: "linear-gradient(45deg,grey,#338BFF 80%)", viewValue: 'Primary',image:"https://wallpaperaccess.com/full/1236461.jpg",color:"bg-primary"},
    {value: "linear-gradient(45deg,#8D959F ,grey 80%)", viewValue: 'Secondary',image:"https://www.wallpapertip.com/wmimgs/177-1778001_hd-windows-10-wallpaper-red-mountains-vector-kaziranga.jpg",color:"bg-secondary"},
    {value: "linear-gradient(45deg,grey,#27AB36  80%)", viewValue: 'Success',image:"https://img4.goodfon.com/wallpaper/nbig/e/d9/manjaro-linux-manjaro-linii-minimalizm-zelenyi-chernyi-figur.jpg",color:"bg-success"},
    {value: "linear-gradient(45deg,grey,#EE1543  80%)", viewValue: 'Danger',image:"https://www.wallpaperup.com/uploads/wallpapers/2014/01/25/237168/c6507279feb22ce544a7070749c60e4f.jpg",color:"bg-danger"},
    {value: "linear-gradient(45deg,grey,#F2B907 50%)", viewValue: 'Warning',image:"https://wallpaperset.com/w/full/5/8/d/53131.jpg",color:"bg-warning"},
    {value: "linear-gradient(45deg,grey,#0EBDFC  80%)", viewValue: 'Info',image:"https://wallpaperaccess.com/full/1236461.jpg",color:"bg-info"},
    {value: "linear-gradient(45deg,deeppink,salmon 50%)", viewValue: 'Pink',image:"https://www.wallpapertip.com/wmimgs/177-1778001_hd-windows-10-wallpaper-red-mountains-vector-kaziranga.jpg",color:"accent"},
    {value: "linear-gradient(45deg,black,grey 80%)", viewValue: 'Light',image:"https://wallpaperaccess.com/full/1236461.jpg",color:"bg-dark"},
    {value: "linear-gradient(45deg,white,grey 80%)", viewValue: 'Dark',image:"https://www.wallpapertip.com/wmimgs/177-1778001_hd-windows-10-wallpaper-red-mountains-vector-kaziranga.jpg",color:"bg-white"},
    {value: "linear-gradient(45deg,black,grey 80%)", viewValue: 'White',image:"https://www.wallpapertip.com/wmimgs/177-1778001_hd-windows-10-wallpaper-red-mountains-vector-kaziranga.jpg",color:"bg-dark"},

  ];

  constructor(private settingservice:SettingserviceService,private studentservice:StudentService,private router :Router,private app:AppComponent) { }

  ngOnInit(): void {
   this.retrieveTheme();
  }
  retrieveTheme(): void {
    this.settingservice.getAll()
      .subscribe(
        data => {
          this.themes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updateTheme(): void {
    console.log(this.selectedTheme);
    this.themes[0].theme=this.selectedTheme.value;
    this.themes[0].image=this.selectedTheme.image;
    this.themes[0].color=this.selectedTheme.color;
    const datum=this.themes[0];
    this.settingservice.update(datum.id,datum)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });


        window.location.reload();
        this.app.reload();
  }


  greet(color:any):void
  {
   alert(color);
   console.log(color);
  }
    totalChange():void
    {
      const datum=this.themes[0];
      this.settingservice.update(datum.id,datum)
        .subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          });
    }
  rchangea():void{
    if(this.themes[0].register.I)
    {
      this.themes[0].register.I=false;
    }
    else{
      this.themes[0].register.I=true;
    }
    this.totalChange();

  }
  rchangeb():void{
    if(this.themes[0].register.II)
    {
      this.themes[0].register.II=false;
    }
    else{
      this.themes[0].register.II=true;
    }
    this.totalChange();
  }
  rchangec():void{
    if(this.themes[0].register.III)
    {
      this.themes[0].register.III=false;
    }
    else{
      this.themes[0].register.III=true;
    }
    this.totalChange();
  }
  rchanged():void{
    if(this.themes[0].register.IV)
    {
      this.themes[0].register.IV=false;
    }
    else{
      this.themes[0].register.IV=true;
    }
    this.totalChange();
  }


}
