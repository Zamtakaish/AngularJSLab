import { Component, OnInit } from '@angular/core';
import IBoard from "../models/Board";
import ICard from "../models/Card";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit, IBoard {

  id: string;
  name: string;
  cards: ICard[];

  constructor() { }

  ngOnInit() {
  }

}
