import {OnInit, Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {StudentService} from '../../_services/student.service';
import {MatAccordion} from '@angular/material/expansion';
import {UpdatestudentComponent} from '../../updatestudent/updatestudent.component';

import {animate, state, style, transition, trigger} from '@angular/animations';
import { SettingserviceService } from 'src/app/_services/settingservice.service';

interface Branch {
  value: String;
}
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class StudentComponent  implements OnInit {
  g='bg-light';
  br:any= "CSE"
  br2:any= "CSE"
  br3:any= "CSE"
  br4:any= "CSE"
  branch: Branch[] = [
    {value: "CSE",},
    {value: "ECE",},
    {value: "EEE",},
    {value: "CIVIL",},
    {value: "ME",},
  ];
  y1='I';
  year=' Year';
  y2='II';
  y3='III';
  y4='IV';

  students:any={};

theme:any=[];
  dataSource ;
  displayedColumns: string[] = ['uid', 'name', 'gender', 'branch'];
  expandedElement: any | null;
  panelOpenState = false;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(private studentservice:StudentService,public dialog: MatDialog,private settingservice:SettingserviceService) {

   }



  ngOnInit():void
  {
    this.retrieveTutorials();
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
  updateStudent(stu:any)
  {
    this.settingservice.changeMessage(stu.uid);
    const dialogRef = this.dialog.open(UpdatestudentComponent, {
      width: '1100px',height:'500px',
      data:stu,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  retrieveTutorials(): void {
    this.studentservice.getAll()
      .subscribe(
        data => {
          this.students = data;
          this.dataSource = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  radioOn(d:any):void
  {
console.log(this.br);
  }


}
