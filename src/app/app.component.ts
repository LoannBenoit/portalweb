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
    
    localStorage.setItem("pseudo","");
    localStorage.setItem("dtCreation","");
    localStorage.setItem("nom","");
    localStorage.setItem("prenom","");
    localStorage.setItem("token","");
    localStorage.setItem("isAuth", "false");
    
    this.sisAuth = localStorage.getItem("isAuth");
    this.isAuth = this.sisAuth.toLowerCase() == 'true' ? true : false; 
    window.location.href = "/";
    console.log("Deconnecté");
  }
}
