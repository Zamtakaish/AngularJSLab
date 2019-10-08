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
  @Input() searchTerm: string;

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

  removeCard(id: string) {
    this.cardList.cards = this.cardList.cards.filter(item => item.id !== id);
  }

  isValid(card: ICard) {
    return this.searchTerm ? card.name.toLowerCase().includes(this.searchTerm.toLowerCase()) : true;
  }

}
