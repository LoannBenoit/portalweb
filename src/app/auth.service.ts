import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth=false;
  public dTCreation;
  public nom ;
  public prenom;
  public token;

  constructor(private http: HttpClient) { }

  public authentify(param: Authentification){
    
  }

}
export class Authentification{
  constructor(public pseudo, public password){}
  public isAuth;
  public dTCreation;
  public nom ;
  public prenom;
  public token; 
}
