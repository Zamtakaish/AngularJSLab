import { Component, OnInit, Input } from '@angular/core';
import IBoard from "../../models/Board";
import ICard from "../../models/Card";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit, IBoard {

  @Input() cardList: IBoard;

  id: string;
  name: string;
  cards: ICard[];

  constructor() {
  }

  ngOnInit() {
    this.id = this.cardList.id;
    this.name = this.cardList.name;
    this.cards = this.cardList.cards;
  }

}
