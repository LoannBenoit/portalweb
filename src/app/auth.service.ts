import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Identity } from './identity';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;

  //user : Identity = new Identity("test","","","","");
  user : Identity;

  constructor() { }

  public authentify(pseudo, dateCreation, nom, prenom, token){
    this.user = new Identity(pseudo,dateCreation,nom,prenom,token);
    console.log("user enregistré");
    this.isAuth = true;
    console.log(this.isAuth);
  }

  public getAuth(){
    console.log("recuperation du user :" + this.user.pseudo);
    return this.user;
  }

}
export class loginUser{

  constructor(public pseudo, public password){}
}
export class editUser{

  constructor(public nom, public prenom, public token){}
}
