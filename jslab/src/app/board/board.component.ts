import { Component, OnInit } from '@angular/core';
import IBoard from '../models/Board';
import {CARDLISTS} from '../data/mockCardList';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  searchTerm: string;
  cardLists: IBoard[] = CARDLISTS;

  constructor() { }

  ngOnInit() {
  }

  saveTerm(value){
    this.searchTerm = value ? value : '';
    console.log('got ' + this.searchTerm);
  }

}
