import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/_services/course.service';
import { SettingserviceService } from 'src/app/_services/settingservice.service';
import { StudentService } from 'src/app/_services/student.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Alert2Component} from '../../alerts/alert2/alert2.component';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.css']
})
export class RegistrationsComponent implements OnInit {
theme:any=[];
currentUser:any;
access:any;
sec="";
temper:any[]=[];
section:any;
temp:any;
fun:any[]=[];
fsections:any[]=[];
ssections:any[]=[];
tsections:any[]=[];
fosections:any[]=[];
student:any;
first_year_courses:any[]=[];
second_year_courses:any[]=[];
third_year_courses:any[]=[];
forth_year_courses:any[]=[];
  constructor(private settingservice:SettingserviceService,private studentservice:StudentService,private token:TokenStorageService,private courseservice:CourseService,public dialog:MatDialog,private router:Router) { }

  ngOnInit(): void {

    this.currentUser = this.token.getUser();
    this.searchTitle();
    this.retrieveTheme();
    this.retriveCourses();


    }
    searchTitle(): void {
      this.studentservice.findByTitle(this.currentUser.username)
        .subscribe(
          data => {
            this.student = data;
            console.log(this.student[0].id);

          },
          error => {
            console.log(error);
          });
    }
  retrieveTheme(): void {
    this.settingservice.getAll()
      .subscribe(
        data => {
          this.theme = data;

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
        for(var i=0;i<data.length;i++)
        {
          if(data[i].coursedetails[0].year===("I"))
          {
            this.temper.push(data[i]);
            this.temper.push({sec:"",val:0})

            this.first_year_courses.push(this.temper);
            this.temper=[];
          }
          if(data[i].coursedetails[0].year===("II"))
          {
            this.temper.push(data[i]);
            this.temper.push({sec:"",val:0})

            this.second_year_courses.push(this.temper);
            this.temper=[];
          }
          if(data[i].coursedetails[0].year===("III"))
          {
            this.temper.push(data[i]);
            this.temper.push({sec:"",val:0})

            this.third_year_courses.push(this.temper);
            this.temper=[];
          }
          else{

            this.temper.push(data[i]);
            this.temper.push({sec:"",val:0})

            this.forth_year_courses.push(this.temper);
            this.temper=[];
          }

        }
        console.log(this.third_year_courses);

      },
      error => {
        console.log(error);
      });
  }
  getData():void
  {

    if(this.student[0].year==="IV")
    {

      this.access=this.theme[0].register.IV;

    }
    else
    {

    }
  }

  if3(a,b)
  {

    for(var i=0;i<a[0].enrolledStudents.length;i++)
    {
      if(b===a[0].enrolledStudents[i].section)
      {
        a[1].val=i+1;

      }
    }
  }

  info(c):void{
    for(var i=0;i<c.length;i++)
    {
         c[i][0].enrolledStudents[(c[i][1].val)-1].currstu++;
        var sterdata={id:this.currentUser.username,
                lms:[],
                  marks:[],
                  attendance:[]

         };
         c[i][0].enrolledStudents[(c[i][1].val)-1].students.push(sterdata);
   this.courseservice.update(c[i][0].id,c[i][0])
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
      var coursed={
        coursename:c[i][0].coursename,
        coursecode:c[i][0].coursecode,
        coursedetails:c[i][0].coursedetails[0],
        lms:[],
        marks:[],
        attendance:[],
      }
      this.student[0].courses.push(coursed);
      this.studentservice.update(this.student[0].id,this.student[0])
        .subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          });

    }
    const dialogRef = this.dialog.open(Alert2Component, {
      width: '400px',
      panelClass: 'custom-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    this.router.navigate(["/user"]);

  }



}
