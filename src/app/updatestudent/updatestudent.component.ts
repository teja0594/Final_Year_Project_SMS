import { OnInit } from '@angular/core';
import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { disableDebugTools } from '@angular/platform-browser';
import { SettingserviceService } from '../_services/settingservice.service';
import {StudentService} from '../_services/student.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {
theme:any=[];
  constructor(private settingservice :SettingserviceService ,public dialogRef: MatDialogRef<UpdatestudentComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private studentservice:StudentService) {}
    udata=this.data;
    fun=this.udata;
   fizz=true;

    onNoClick(): void {
      this.dialogRef.close();
      
    }
    editStudent(): void {
      this.fizz=false;
    }
    updateStudent(): void {
      const datum=this.fun;
      this.studentservice.update(datum.id,datum)
        .subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          });
          this.dialogRef.close();
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

}
