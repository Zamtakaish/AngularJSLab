import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() passEvent = new EventEmitter<string>();

  term: string;

  constructor() { }

  ngOnInit() {
  }

  passTerm(value: string) {
    this.passEvent.emit(value);
  }

}
