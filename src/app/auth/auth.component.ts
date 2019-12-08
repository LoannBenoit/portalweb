import { Component, OnInit } from '@angular/core';
import { Authentification, AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Identity } from '../identity';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public auth: Authentification = new Authentification('','');
  public isAuth;

  //identite : Identity;
  constructor(private authService: AuthService, private http: HttpClient) { }

  ngOnInit() {
  }

  register(){
    console.log(this.auth);
    this.http.post('http://localhost:3000/login', this.auth).subscribe(
    (response: any) => {
        console.log(response);
        if(response.token !== ""){


          localStorage.setItem("pseudo",response.pseudo);
          var date = new Date();
          var sDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
          localStorage.setItem("dtCreation",sDate);
          localStorage.setItem("nom",response.nom);
          localStorage.setItem("prenom",response.prenom);
          localStorage.setItem("token",response.token);
          localStorage.setItem("isAuth", "true");

          this.auth.isAuth = true;
        }
       
      }
    )
}
}
