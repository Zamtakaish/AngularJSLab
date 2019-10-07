import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-toolbar-search',
  templateUrl: './toolbar-search.component.html',
  styleUrls: ['./toolbar-search.component.css']
})
export class ToolbarSearchComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<string>();

  term: string;

  constructor() { }

  ngOnInit() {
  }

  emitSearch(value: string) {
    this.searchEvent.emit(value);
  }

}
