import { Component, OnInit } from '@angular/core';
import ICard from "../models/Card";
import IUser from "../models/User";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, ICard {

  id: string;
  name: string;
  description: string;
  dueDate?: Date| string;
  assignee?: IUser;

  constructor() { }

  ngOnInit() {
  }

}
