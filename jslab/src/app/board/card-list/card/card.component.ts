import { Component, OnInit, Input } from '@angular/core';
import ICard from "../../../models/Card";
import IUser from "../../../models/User";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, ICard {

  @Input() card: ICard;

  id: string;
  name: string;
  description: string;
  dueDate?: Date| string;
  assignee?: IUser;

  constructor() {
  }

  ngOnInit() {
    this.id = this.card.id;
    this.name = this.card.name;
    this.description = this.card.description;
    this.dueDate = this.card.dueDate ? this.card.dueDate : undefined;
    this.assignee = this.card.assignee ? this.card.assignee : undefined;
  }

}
