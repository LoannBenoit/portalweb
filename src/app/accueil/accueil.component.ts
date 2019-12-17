import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  
  title = 'Accueil'
  pseudo = this.authService.pseudo;
  isAuth = this.authService.isLogin()
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
