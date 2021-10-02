import { Component, OnInit } from '@angular/core';
import { CourseService} from '../../../_services/course.service';
import {MatBottomSheet, MatBottomSheetRef,MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
import {MsgComponent} from './msg/msg.component';
import {Alert1Component} from '../../../alerts/alert1/alert1.component';
import {Router} from '@angular/router';
import { SettingserviceService } from 'src/app/_services/settingservice.service';
@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  theme:any=[];
  nos:any;
  sections:any[]=[];
  maxstud:any;
coursera:any; submitted = false; ok=false; stu:any; isSuccessful = false;
 l:any; t:any; p:any; s:any; ltps:any;
  course = { ltps:'', credits:'', year:'',  prc:'',  prcn:'', prcc:'', type:'', spec:'' };
  stud:any[];
  coursecode='';  coursename='';
  image="https://i.pinimg.com/originals/18/58/89/1858894a22e60b56f1d846f9e24ff474.jpg";
  image2="https://wallpaperaccess.com/full/1236461.jpg";
  constructor(private courseservice:CourseService ,private _bottomSheet: MatBottomSheet,private router :Router,private settingservice:SettingserviceService) { }
  ngOnInit():void {
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
   nextDetails():void
   {
     const data1={coursecode:this.coursecode,coursename:this.coursename,};
     this.courseservice.create(data1).subscribe( response => {
       this.ok=true; console.log(response); this.retriveCourse(response);},
      error => {console.log(error); });
   }

  openBottomSheet(): void {
    this._bottomSheet.open(Alert1Component,{data:this.coursename});
  }

  retriveCourse(response):void{
    this.courseservice.findByTitle(response.id).subscribe(data => {
        this.coursera = data; console.log(this.coursera); },
      error => { console.log(error);});
  }
 cancel():void{
  this.router.navigate(["/admin/courses"]);
 }
  onSubmit():void
  {
     for(var i=1;i<=this.nos;i=i+1)
     {
       let nuy=String(i);
      var data=
       {
         section:"S"+nuy,
         currstu:0,
         maxstu:this.maxstud,
         students:this.stud,
       };
         this.coursera.enrolledStudents.push(data);
     }
  this.course.ltps=String(this.l)+"-"+String(this.t)+"-"+String(this.p)+"-"+String(this.s);
  this.coursera.coursedetails.push(this.course);
  console.log(this.coursera);
    this.submitted = true;
    this.isSuccessful=true;
    const datum=this.coursera;
      this.courseservice.update(datum.id,datum)
        .subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          });
         this.cancel();
          this.openBottomSheet();
  }

}
