import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { SettingserviceService } from '../_services/settingservice.service';
import { StudentService } from '../_services/student.service';

interface gender {
  num: string;
}
interface year {
  num: string;
}
interface branch {
  name: string;
}
interface spec {
  name: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  years: year[] = [
    {num: ' I Year'},
    {num: 'II Year'},
    {num: 'III Year'},
    {num: 'IV Year'}
  ];
  genders: gender[] = [
    {num: 'Male'},
    {num: 'Female'},
    {num: 'None'}
  ];
  branches:branch[]=[
    {name:'CSE'},
    {name:'ECE'},
    {name:'EEE'},
    {name:'ECM'},
    {name:'ME'},
    {name:'CIVIL'},
  ];
    specs:spec[]=[
      {name:'AI'},
      {name:'DS'},
      {name:'CC'},
      {name:'SE'},
      {name:'CS'},
  ];
  ser='';
  student = {
    uid:String,
        name:'',
        gender:'',
        age:'',
        dob:'',
        bloodgroup:'',
        uemail:'',
        pemail:'',
        branch:'',
        year:''
  };
  submitted = false;
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
fname='';
lname='';
theme:any=[];
  constructor(private authService: AuthService,private studentservice:StudentService,private settingservice :SettingserviceService) { }

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

  onSubmit(): void {
    this.student.name=this.fname+' '+this.lname;
     this.form.email=this.form.username+'@kluniversity.in';
    const data1 = {
      uid:this.form.username,
      name: this.student.name,
      gender:this.student.gender,
      age: this.student.age,
      dob:this.student.dob,
      bloodgroup:this.student.bloodgroup,
      uemail:this.form.email,
      pemail:this.student.pemail,
      branch:this.student.branch,
      year:this.student.year
    };
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
    this.studentservice.create(data1)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }
  newTutorial(): void {
    this.submitted = false;
    this.student = {
      uid:this.form.username,
      name: this.student.name,
      gender:this.student.gender,
      age: this.student.age,
      dob:this.student.dob,
      bloodgroup:this.student.bloodgroup,
      uemail:this.form.email,
      pemail:this.student.pemail,
      branch:this.student.branch,
      year:this.student.year
    };
  }


}
