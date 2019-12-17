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
  
  isAuth = this.authService.isLogin()

  ngOnInit(){
  }
  constructor(private authService: AuthService,private router: Router){
  }

  deconnect(){
    this.authService.logout();
    //this.router.navigate(["/"]);
    window.location.href = "/";
    console.log("Deconnecté");
  }
}
