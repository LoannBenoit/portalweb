import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Identity } from './identity';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean;
  user : Identity;
  pseudo = localStorage.getItem("pseudo");

  constructor(private http: HttpClient) { 
  }


  public login(pseudo, password){
    return this.http.post('http://localhost:3000/login', {pseudo,password} );
  }

  public logout(){
      localStorage.setItem("pseudo","");
      localStorage.setItem("dtCreation","");
      localStorage.setItem("nom","");
      localStorage.setItem("prenom","");
      localStorage.setItem("token","");
      localStorage.setItem("isAuth", "false");
      this.user = null;
      console.log("Service logout");
  }
  setSession(pseudo, dtCReation, nom, prenom, token){
        localStorage.setItem("pseudo",pseudo);
        localStorage.setItem("dtCreation",dtCReation);
        localStorage.setItem("nom",nom);
        localStorage.setItem("prenom",prenom);
        localStorage.setItem("token",token);
        localStorage.setItem("isAuth", "true");

        console.log("user enregistré");
        this.isAuth = true;
  }

  get session() : Identity { 
    this.user = new Identity(
      localStorage.getItem("pseudo"),
      localStorage.getItem("dtCreation"),
      localStorage.getItem("nom"),
      localStorage.getItem("prenom"),
      localStorage.getItem("token")
    );
    return this.user; 
  }

  isLogin():boolean {
      if (localStorage.getItem("isAuth") == "true"){
        return true;
      }
      else{
        return false;
      }
  }

}
