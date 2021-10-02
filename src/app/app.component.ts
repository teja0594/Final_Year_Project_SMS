import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { SettingserviceService } from './_services/settingservice.service';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  indicator:any=true;
  g='bg-elegant-color-dark';
  theme:any=[];
  private roles: string;
  isLoggedIn = false;
  showAdminBoard = false;
  tile='blue';
  username: string;
  constructor(private tokenStorageService: TokenStorageService,public dialog: MatDialog,private settingservice:SettingserviceService,private router:Router) {
    this.router.events.subscribe((routerEvent:Event)=>
    {
      if(routerEvent instanceof NavigationStart)
      {
        this.indicator=true;
      }
      if(routerEvent instanceof NavigationEnd)
      {
        this.indicator=false;
      }
    }
    );
   }



  ngOnInit(): void {
    this.retrieveTheme();
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.username = user.username;
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

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  reload():void
  {
    window.location.reload();
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
      panelClass: 'custom-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

