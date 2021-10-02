import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/_services/course.service';
import { SettingserviceService } from 'src/app/_services/settingservice.service';
import { StudentService } from 'src/app/_services/student.service';

interface Branch {
  value: String;
}
interface Year {
  value: String;
}
@Component({
  selector: 'app-admin-attendance-registar',
  templateUrl: './admin-attendance-registar.component.html',
  styleUrls: ['./admin-attendance-registar.component.css']
})
export class AdminAttendanceRegistarComponent implements OnInit {
  myDate = new Date();
  ok=false;
  pre="Present";
  abs="Absent";
  br:any;
  yr:any;
  swq:any;
  secf:any;
  theme:any=[];
  tmp:any[]=[];
  courses:any[]=[];
  sections:any[];
  students:any[]=[];
  check=true;
  year: Year[] = [
    {value: "I",},
    {value: "II",},
    {value: "III",},
    {value: "IV",},
  ];

  constructor(private settingservice:SettingserviceService ,private courseservice:CourseService,private studentservice:StudentService) { }

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
  open( yer):void
  {
    this.courseservice.getAll()
    .subscribe(
      data => {
        for(var i=0;i<data.length;i++)
        {
          if(data[i].coursedetails[0].year===yer)
          {
            this.courses.push(data[i]);
          }

        }
        console.log(this.courses)


      },
      error => {
        console.log(error);
      });

  }
  sec(a):void{
    for(var i=0;i<this.courses.length;i++)
    {
      if(this.courses[i].coursecode===a)
      {
            this.sections=this.courses[i].enrolledStudents;
      }

    }

  }
  getStudents(secg):void{
    for(var i=0;i<this.sections.length;i++)
    {
      if(this.sections[i].section===secg)
      {
        for(var j=0;j<this.sections[i].students.length;j++)
        {
         this.tmp.push(this.sections[i].students[j])
         var  checked=false;
         var cnt=0;
         this.tmp.push(checked);
         this.tmp.push(cnt);
         this.students.push(this.tmp);
         this.tmp=[];
        }

      }
    }

    console.log(this.students);
    this.ok=true;

  }
  attendance(a,stat):void{
    console.log(this.br)
    var d= this.myDate.getDate()+"/"+ this.myDate.getMonth()+"/"+ this.myDate.getFullYear();
    var tim = this.myDate.getHours()+":"+this.myDate.getMinutes()+":"+this.myDate.getSeconds();
    if(a[2]==0)
    {
    if(stat===this.pre)
    {
      a[1]=true;
    }
    else
    {
      a[1]=false;
    }

    var attend={
      date:d,
      time:tim,
      status:a[1]?"Present":"Absent"
    };
    a[0].attendance.push(attend);
    a[2]++;
     console.log(a[0].attendance);
  }
  else{
    a[2]--;
    a[0].attendance.pop();
    if(stat===this.pre)
    {
      a[1]=true;
    }
    else
    {
      a[1]=false;
    }

    var attend={
      date:d,
      time:tim,
      status:a[1]?"Present":"Absent"
    };
    a[0].attendance.push(attend);
    a[2]++;
     console.log(a[0].attendance);
  }


  }



  fattend():void{
    for(var i=0;i<this.students.length;i++)
    {

      this.studentservice.findByTitle(this.students[i][0].id)
      .subscribe(
        data => {
          this.swq = data;
          console.log(this.swq[0].courses);
        },
        error => {
          console.log(error);
        });

          console.log(this.swq[0]);


    }



  }
}
