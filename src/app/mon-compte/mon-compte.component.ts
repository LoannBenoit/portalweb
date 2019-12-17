import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Identity } from '../identity';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.scss'],
})
export class MonCompteComponent implements OnInit {
  
  public identite : Identity = new Identity("","","","","");
  public identityEdit : Identity ;
  public isValid = false;
  public message = "";

  submitOnTime= false;

  constructor(private http: HttpClient, private authService: AuthService) {
    console.log("constructor");
   }
   
  ngOnInit() {
    console.log("ngOnInit");

    console.log(this.authService.session);

    this.identite = this.authService.session;
   
  }

  edit(){
    if(this.identityEdit){
        this.identityEdit = null;
        this.message ="";
    }else{
      this.identityEdit = new Identity(
        this.identite.pseudo, 
        this.identite.dateCreation, 
        this.identite.nom,
        this.identite.prenom,
        this.identite.token)
    }
    
  }

  save() {
    var nom = this.identityEdit.nom;
    var prenom = this.identityEdit.prenom;
    var token = this.identityEdit.token;

    this.http.post('http://localhost:3000/edit', {nom, prenom, token}).subscribe(
      (response: any) => {
          console.log(response);
          this.isValid = response.valid;
          if(this.isValid){
            this.identite.nom = nom;
            this.identite.prenom = prenom;
            localStorage.setItem("nom",this.identite.nom);
            localStorage.setItem("prenom",this.identite.prenom);
            this.message = "Server : Enregistré !"
          }
          else{
            this.message = "Server : " + response.reason;
          }
        }
      )
    this.submitOnTime = true;
  }

}
