import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderLogoComponent } from './header/header-logo/header-logo.component';
import { ToolbarComponent } from './board/toolbar/toolbar.component';
import { ToolbarSearchComponent } from './board/toolbar/toolbar-search/toolbar-search.component';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './board/card-list/card/card.component';
import { FooterComponent } from './footer/footer.component';
import { CardListComponent } from './board/card-list/card-list.component';
import { HeaderLoginComponent } from './header/header-login/header-login.component';

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
    CardListComponent,
    HeaderLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
