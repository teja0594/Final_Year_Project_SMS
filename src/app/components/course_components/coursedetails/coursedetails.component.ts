import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../_services/course.service';
import {SettingserviceService} from '../../../_services/settingservice.service';
@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {
theme:any=[];
  dataSource:any;
  courses:any;
  constructor(private courseservice:CourseService,private settingservice:SettingserviceService) { }

  ngOnInit(): void {
    this.retriveCourses();
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
  retriveCourses():void
  {
    this.courseservice.getAll()
    .subscribe(
      data => {
        this.courses = data;
        this.dataSource = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
