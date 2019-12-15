import { Component, OnInit } from '@angular/core';
import { AuthService, editUser } from '../auth.service';
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
  public editUser: editUser = new editUser('','','');
  public isValid = false;
  public message = "";

  submitOnTime= false;

  constructor(private http: HttpClient) {
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
    this.editUser.nom = this.identityEdit.nom;
    this.editUser.prenom = this.identityEdit.prenom;
    this.editUser.token = this.identityEdit.token;
    console.log(this.editUser);

    this.http.post('http://localhost:3000/edit', this.editUser).subscribe(
      (response: any) => {
          console.log(response);
          this.isValid = response.valid;
          if(this.isValid){
            this.identite.nom = this.editUser.nom;
            this.identite.prenom = this.editUser.prenom;
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
