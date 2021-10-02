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

  CSE:b1[];
  ECE:b1[];
  EEE:b1[];
  ECM:b1[];
  ME:b1[];
  CIVIL:b1[];

}
interface b1 {

  name: string;
  code:string;
}

@Component({
  selector: 'app-temp2',
  templateUrl: './temp2.component.html',
  styleUrls: ['./temp2.component.css']
})
export class Temp2Component implements OnInit {
  years: year[] = [
    {num: 'I'},
    {num: 'II'},
    {num: 'III'},
    {num: 'IV'}
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
      {
        CSE:
      [
        {name:'Artificial intelligence',code:'AS'},
        {name:'Data Science',code:'DS'},
        {name:'Cloud Computing',code:'CC'},
        {name:'Software Engineering',code:'SE'},
        {name:'Cyber Security',code:'CS'}
      ],
      ECE:
      [
        {name:'Signal Processing',code:'SP'},
        {name:'Telecommunications Engineering',code:'TE'},
        {name:'Instrumentation Engineering',code:'IE'},
        {name:'Control Engineering',code:'CE'},
        {name:'VLSI design Engineering',code:'VDE'}
      ],
      ECM:
      [
        {name:'Artificial intelligence',code:'AS'},
        {name:'Data Science',code:'DS'},
        {name:'Cloud Computing',code:'CC'},
        {name:'Software Engineering',code:'SE'},
        {name:'Cyber Security',code:'CS'}
      ],
      EEE:
      [
        {name:'Artificial intelligence',code:'AS'},
        {name:'Data Science',code:'DS'},
        {name:'Cloud Computing',code:'CC'},
        {name:'Software Engineering',code:'SE'},
        {name:'Cyber Security',code:'CS'}
      ],
      ME:
      [
        {name:'Artificial intelligence',code:'AS'},
        {name:'Data Science',code:'DS'},
        {name:'Cloud Computing',code:'CC'},
        {name:'Software Engineering',code:'SE'},
        {name:'Cyber Security',code:'CS'}
      ],
      CIVIL:
      [
        {name:'Geotechnical Engineering',code:'GE'},
        {name:'Structural Engineering',code:'STE'},
        {name:'Transportation Engineering',code:'TE'},
        {name:'Hydraulic Engineering',code:'HYE'},
        {name:'Environmental Engineering',code:'EME'}
      ]

    }
     ];

  student = {
    uid:'',
        name:'',
        gender:'',
        age:'',
        dob:'',
        bloodgroup:'',
        uemail:'',
        pemail:'',
        branch:'',
        year:'',
        ser:''
  };
  submitted = false;
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
fname='';
lname='';
step = 0;
theme:any=[];
constructor(private authService: AuthService,private studentservice:StudentService,private settingservice:SettingserviceService) { }


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }



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
      year:this.student.year,
      ser:this.student.ser
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
      year:this.student.year,
      ser:this.student.ser
    };
  }


}
