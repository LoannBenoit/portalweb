import { Component, OnInit } from '@angular/core';
import { loginUser } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public loginUser: loginUser = new loginUser('','');
  public message = "";

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  register(){
    console.log(this.loginUser);
    this.http.post('http://localhost:3000/login', this.loginUser).subscribe(
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
          window.location.href = "/";
        }
      },
      (error : any) => {
        this.message = "Echec de l'authentification"
      }
    )
}
}
