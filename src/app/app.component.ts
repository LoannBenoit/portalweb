import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PortalWEB';
  
  sisAuth = localStorage.getItem("isAuth");
  isAuth = this.sisAuth.toLowerCase() == 'true' ? true : false; 


  deconnect(){
    localStorage.setItem("isAuth", "false");
    this.sisAuth = localStorage.getItem("isAuth");
    this.isAuth = this.sisAuth.toLowerCase() == 'true' ? true : false; 
    console.log("Deconnecté");
  }
}
