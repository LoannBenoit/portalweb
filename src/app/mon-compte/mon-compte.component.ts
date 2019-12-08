import { Component, OnInit } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';
import { Authentification, AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Identity } from '../identity';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.scss']
})
export class MonCompteComponent implements OnInit {
  
  public identite : Identity = new Identity("","","","","");
  auth;

  constructor(private serv: AuthService) {
    console.log("constructor");
   }


  ngOnInit() {
    console.log("ngOnInit");

    this.identite.pseudo = localStorage.getItem("pseudo");
   
    this.identite.dateCreation = localStorage.getItem("dtCreation");
    this.identite.nom = localStorage.getItem("nom");
    this.identite.prenom = localStorage.getItem("prenom");
    this.identite.token = localStorage.getItem("token");
    
    console.log(this.identite);
  }

}
