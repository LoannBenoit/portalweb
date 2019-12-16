import { Component, RootRenderer } from '@angular/core';
import { AuthService } from '../app/auth.service';
import { Router } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PortalWEB';
  isAuth: boolean = localStorage.getItem("isAuth") == "true" ? true : false; 
  //isAuth: boolean ;
  
  constructor(private authService: AuthService,private router: Router){
    this.isAuth = localStorage.getItem("isAuth") == "true" ? true : false; 
  }

  deconnect(){
    this.authService.logout();
    this.router.navigate(["/"]);
    this.isAuth = localStorage.getItem("isAuth") == "true" ? true : false; 
    console.log("Deconnecté");
  }
}
