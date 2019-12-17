import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  pseudo: string;
  password: string;
  public message = "";
  public sDate:string;

  constructor(private http: HttpClient, private authservice: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register(){
    this.authservice.login(this.pseudo,this.password).subscribe(
      (data: any)=> {  
          if (data != ""){
            this.sDate = formatDate(Date.now(),"dd-MM-yyyy HH:mm:ss","en-FR") ;
            this.authservice.setSession(data.pseudo,this.sDate,data.nom,data.prenom,data.token);
            this.message = "Authentifié !";
            //this.router.navigate(["/"]);
            window.location.href = "/";
          }        
      },
      (error)=> {
        console.log(error.status);
        if (error.status == 401){
          this.message = "Echec de l'authentification.";
        }
      }
    );
    
  }
}
