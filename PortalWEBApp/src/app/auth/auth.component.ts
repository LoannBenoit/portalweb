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
  public isAuth = false;
  public identite: Identity ;

  constructor(private authService: AuthService, private http: HttpClient) { }

  ngOnInit() {
  }

  register(){
    console.log(this.auth);
    this.http.post('http://localhost:3000/login', this.auth).subscribe(
    (response: any) => {
        console.log(response);
        if(response.token !== ""){
          this.isAuth = true;
          this.identite = new Identity(response.pseudo,Date.now(), response.nom, response.prenom, response.token);
          console.log("Authentifié ! -->" + this.identite.pseudo);
        }
       
      }
    )
}
}
