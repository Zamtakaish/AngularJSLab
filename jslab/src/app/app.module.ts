import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarSearchComponent } from './toolbar-search/toolbar-search.component';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderLogoComponent,
    ToolbarComponent,
    ToolbarSearchComponent,
    BoardComponent,
    CardComponent,
    FooterComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
