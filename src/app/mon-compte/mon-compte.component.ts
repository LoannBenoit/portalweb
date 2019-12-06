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
  
  identite : Identity;
  
  constructor() { }

  ngOnInit() {
    
  }

}
