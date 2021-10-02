import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { TokenStorageService } from '../_services/token-storage.service';
import {UploadserviceService} from '../_services/uploadservice.service';
import {StudentService} from '../_services/student.service';
interface Grade
{
   g:String,
   gp:number,
}
@Component({
  selector: 'app-profileresults',
  templateUrl: './profileresults.component.html',
  styleUrls: ['./profileresults.component.css']
})
export class ProfileresultsComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor(private token: TokenStorageService, private uploadservice:UploadserviceService,private studentservice:StudentService) { }
  grades: Grade[] = [
    {g:'O',gp:10},
    {g:'A+',gp:9},
    {g:'A',gp:8},
    {g:'B+',gp:7},
    {g:'B',gp:6},
    {g:'C',gp:5},
    {g:'P',gp:4},
    {g:'F',gp:0},
  ];
  y1:any="I";
  y2:any="II";
  y3:any="III";
  y4:any="IV";
  s1:any="I";
  s2:any="II";
  gp1;
  gp2;
  gp3;
  gp4;
  gp5;
  by=false;
bulkresults:any;
results:any={};
currentUser: any;
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.retrieveTutorials();
  }
  retrieveTutorials(): void {
    this.uploadservice.findByTitle(this.currentUser.username)
    .subscribe(
      data => {
        this.bulkresults = data;
        if(this.bulkresults.length>0)
        {
          this.by=true;
          console.log(data);
        }


      },
      error => {
        console.log(error);
      });
  }
  grading(a:any)
  {
      if(a>=85&&a<=100)
      {
        this.gp1=this.grades[0].gp;
        return this.grades[0].g;

      }
      else if(a>=80&&a<85)
      {
        this.gp1=this.grades[1].gp;
        return this.grades[1].g;
      }
      else if(a>=65&&a<80)
      {
        this.gp1=this.grades[2].gp;
        return this.grades[2].g;
      }
      else if(a>=60&&a<65)
      {
        this.gp1=this.grades[3].gp;
        return this.grades[3].g;
      }
      else if(a>=50&&a<60)
      {
        this.gp1=this.grades[4].gp;
        return this.grades[4].g;
      }
      else if(a>=45&&a<50)
      {
        this.gp1=this.grades[5].gp;
        return this.grades[5].g;
      }
      else if(a>=40&&a<45)
      {
        this.gp1=this.grades[6].gp;
        return this.grades[6].g;
      }
      else{
        this.gp1=this.grades[7].gp;
        return this.grades[7].g;
      }
  }
  grading1(a:any)
  {
      if(a>=85&&a<=100)
      {
        this.gp2=this.grades[0].gp;
        return this.grades[0].g;

      }
      else if(a>=80&&a<85)
      {
        this.gp2=this.grades[1].gp;
        return this.grades[1].g;
      }
      else if(a>=65&&a<80)
      {
        this.gp2=this.grades[2].gp;
        return this.grades[2].g;
      }
      else if(a>=60&&a<65)
      {
        this.gp2=this.grades[3].gp;
        return this.grades[3].g;
      }
      else if(a>=50&&a<60)
      {
        this.gp2=this.grades[4].gp;
        return this.grades[4].g;
      }
      else if(a>=45&&a<50)
      {
        this.gp2=this.grades[5].gp;
        return this.grades[5].g;
      }
      else if(a>=40&&a<45)
      {
        this.gp2=this.grades[6].gp;
        return this.grades[6].g;
      }
      else{
        this.gp2=this.grades[7].gp;
        return this.grades[7].g;
      }
  }
  grading2(a:any)
  {

      if(a>=85&&a<=100)
      {
        this.gp3=this.grades[0].gp;
        return this.grades[0].g;

      }
      else if(a>=80&&a<85)
      {
        this.gp3=this.grades[1].gp;
        return this.grades[1].g;
      }
      else if(a>=65&&a<80)
      {
        this.gp3=this.grades[2].gp;
        return this.grades[2].g;
      }
      else if(a>=60&&a<65)
      {
        this.gp3=this.grades[3].gp;
        return this.grades[3].g;
      }
      else if(a>=50&&a<60)
      {
        this.gp3=this.grades[4].gp;
        return this.grades[4].g;
      }
      else if(a>=45&&a<50)
      {
        this.gp3=this.grades[5].gp;
        return this.grades[5].g;
      }
      else if(a>=40&&a<45)
      {
        this.gp3=this.grades[6].gp;
        return this.grades[6].g;
      }
      else{
        this.gp3=this.grades[7].gp;
        return this.grades[7].g;
      }
  }
  grading3(a:any)
  {
      if(a>=85&&a<=100)
      {
        this.gp4=this.grades[0].gp;
        return this.grades[0].g;

      }
      else if(a>=80&&a<85)
      {
        this.gp4=this.grades[1].gp;
        return this.grades[1].g;
      }
      else if(a>=65&&a<80)
      {
        this.gp4=this.grades[2].gp;
        return this.grades[2].g;
      }
      else if(a>=60&&a<65)
      {
        this.gp4=this.grades[3].gp;
        return this.grades[3].g;
      }
      else if(a>=50&&a<60)
      {
        this.gp4=this.grades[4].gp;
        return this.grades[4].g;
      }
      else if(a>=45&&a<50)
      {
        this.gp4=this.grades[5].gp;
        return this.grades[5].g;
      }
      else if(a>=40&&a<45)
      {
        this.gp4=this.grades[6].gp;
        return this.grades[6].g;
      }
      else{
        this.gp4=this.grades[7].gp;
        return this.grades[7].g;
      }
  }
  grading4(a:any)
  {

      if(a>=85&&a<=100)
      {
        this.gp5=this.grades[0].gp;
        return this.grades[0].g;

      }
      else if(a>=80&&a<85)
      {
        this.gp5=this.grades[1].gp;
        return this.grades[1].g;
      }
      else if(a>=65&&a<80)
      {
        this.gp5=this.grades[2].gp;
        return this.grades[2].g;
      }
      else if(a>=60&&a<65)
      {
        this.gp5=this.grades[3].gp;
        return this.grades[3].g;
      }
      else if(a>=50&&a<60)
      {
        this.gp5=this.grades[4].gp;
        return this.grades[4].g;
      }
      else if(a>=45&&a<50)
      {
        this.gp5=this.grades[5].gp;
        return this.grades[5].g;
      }
      else if(a>=40&&a<45)
      {
        this.gp5=this.grades[6].gp;
        return this.grades[6].g;
      }
      else{
        this.gp5=this.grades[7].gp;
        return this.grades[7].g;
      }
  }

}
