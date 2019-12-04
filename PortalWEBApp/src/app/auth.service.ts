import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;

  constructor(private http: HttpClient) { }

  public authentify(param: Authentification){
    
  }

}
export class Authentification{
  constructor(public pseudo, public password){}
}
