import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  
  title = 'Accueil'
  pseudo = localStorage.getItem("pseudo");
  sisAuth = localStorage.getItem("isAuth");
  isAuth = this.sisAuth.toLowerCase() == 'true' ? true : false; 
  
  constructor() { }

  ngOnInit() {
  }

}
