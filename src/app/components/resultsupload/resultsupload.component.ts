import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { SettingserviceService } from 'src/app/_services/settingservice.service';
import * as XLSX from 'xlsx';
import {UploadserviceService} from '../../_services/uploadservice.service';

interface Branch {
  value: String;
}
interface SEM {
  value: String;
}
type fun=any[][];
@Component({
  selector: 'app-resultsupload',
  templateUrl: './resultsupload.component.html',
  styleUrls: ['./resultsupload.component.css']
})
export class ResultsuploadComponent implements OnInit {
br:any;
semester:any;
  data: fun;
theme:any=[];
gd:any="";
  data2:any[]=[];
  fname:any;
  branch: Branch[] = [
    {value: "I",},
    {value: "II",},
    {value: "III",},
    {value: "IV",},
  ];
  semmer: SEM[] = [
    {value: "I",},
    {value: "II",},
  ];

  constructor(private uploadservice:UploadserviceService,private settingservice:SettingserviceService) { }
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';

  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);
this.gd=target.files[0];
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      this.data = <fun>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      var datum = this.data.slice(1, this.data.length);
      for (var i=0; i<datum.length; i++) {
        var d = datum[i];

       var  student = { uid:'', name:'', cn1:'', cc1:'',cin1:'',	cex1:'',	cn2:'',	cc2:'',	cin2:'',	cex2:'',	cn3:'',	cc3:'',	cin3:'',	cex3:'',	cn4:'',	cc4:'',	cin4:'',	cex4:'',	cn5:'',	cc5:'',	cin5:'',	cex5:'' };
              student.uid=d[0];
              student.name=d[1];
              student.cn1=d[2];student.cc1=d[3];student.cin1=d[4];student.cex1=d[5];
              student.cn2=d[6];student.cc2=d[7];student.cin2=d[8];student.cex2=d[9];
              student.cn3=d[10];student.cc3=d[11];student.cin3=d[12];student.cex3=d[13];
              student.cn4=d[14];student.cc4=d[15];student.cin4=d[16];student.cex4=d[17];
              student.cn5=d[18];student.cc5=d[19];student.cin5=d[20];student.cex5=d[21];
              this.data2.push(student);
      }
    };
    reader.readAsBinaryString(target.files[0]);
  }


  export(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
  }

  onSubmit()
  {
    for(var i=0;i<this.data2.length;i++)
    {
      const data1={
        uid:this.data2[i].uid,
        name:this.data2[i].name,
        cn1:this.data2[i].cn1, cc1:this.data2[i].cc1,cin1:this.data2[i].cin1,	cex1:this.data2[i].cex1,
        cn2:this.data2[i].cn2, cc2:this.data2[i].cc2,cin2:this.data2[i].cin2,	cex2:this.data2[i].cex2,
        cn3:this.data2[i].cn3, cc3:this.data2[i].cc3,cin3:this.data2[i].cin3,	cex3:this.data2[i].cex3,
        cn4:this.data2[i].cn4, cc4:this.data2[i].cc4,cin4:this.data2[i].cin4,	cex4:this.data2[i].cex4,
        cn5:this.data2[i].cn5, cc5:this.data2[i].cc5,cin5:this.data2[i].cin5,	cex5:this.data2[i].cex5,
        year:this.br,semester:this.semester,

      };
      this.uploadservice.create(data1)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
      }
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
