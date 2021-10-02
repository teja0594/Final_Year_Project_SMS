import { Component, OnInit } from '@angular/core';
import {StudentService} from '../_services/student.service';
import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-tempprofile',
  templateUrl: './tempprofile.component.html',
  styleUrls: ['./tempprofile.component.css']
})
export class TempprofileComponent implements OnInit {
  students:any;
  currentUser: any;
  constructor(private token: TokenStorageService,private studentservice:StudentService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();

    this.searchTitle();
  }
  searchTitle(): void {
    this.studentservice.findByTitle(this.currentUser.username)
      .subscribe(
        data => {
          this.students = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
