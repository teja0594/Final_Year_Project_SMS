import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import {  HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ProfileserviceService} from '../_services/profileservice.service';
import { FormGroup, FormControl } from "@angular/forms";
import { SettingserviceService } from '../_services/settingservice.service';
import { Subscription } from "rxjs";
import { TokenStorageService } from '../_services/token-storage.service';

interface Profile {
  _id: string;
  userid:string,
  name: string;
  imagePath: string;
}
@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {


  by=false;
  colores='lightblue';
  gd:any;
  profiles: Profile[] = [];
  private profileSubscription: Subscription;
  form: FormGroup;
  profile: Profile;
  imageData: string;
currentUser:any;
  constructor(private profileService: ProfileserviceService,private _service:SettingserviceService,private token:TokenStorageService) {}

  ngOnInit(){
    this.currentUser = this.token.getUser();
    this.form = new FormGroup({
      name: new FormControl(null),
      image: new FormControl(null),
    });
    this.profileService.getProfiles();
    this.profileSubscription = this.profileService
      .getProfilesStream()
      .subscribe((profiles: Profile[]) => {
        this.profiles = profiles;
      });
  }
  onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.gd=file.name;
    this.form.patchValue({ image: file });
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    this.profileService.addProfile(this.currentUser.username,this.form.value.name, this.form.value.image);
    this.form.reset();
    this.imageData = null;
    this.by=false;
  }
  addFile()
  {
this.by=true;
  }


}
