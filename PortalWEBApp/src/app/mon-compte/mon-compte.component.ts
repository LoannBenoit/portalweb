import { Component, OnInit } from '@angular/core';
import { Identity } from '../identity';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.scss']
})
export class MonCompteComponent implements OnInit {

  public monIdentite : Identity = new Identity("test","","","","");
  
  constructor() { }

  ngOnInit() {
  }

}
