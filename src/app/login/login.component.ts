import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import {Router} from '@angular/router';
import { SettingserviceService } from '../_services/settingservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
theme:any=[];
  form: any = {};
  teja="admin";
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string = '';

  namesave(b:any)
  {
this.teja=b;
  }
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router :Router,private settingservice :SettingserviceService) { }

  ngOnInit(): void {
    this.retrieveTheme();
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
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

    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        console.log(this.roles);
        this.reloadPage();
        this.roles.match("ROLE_ADMIN")?this.router.navigate(["/user"]):this.router.navigate(["/admin"]);

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
