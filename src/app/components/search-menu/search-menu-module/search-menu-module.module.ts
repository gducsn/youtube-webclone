import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchMenuComponent } from '../search-menu.component';
import { InsideMenuComponent } from '../inside-menu/inside-menu.component';
import { AspettoComponent } from '../inside-menu/micro-component/aspetto/aspetto.component';
import { LinguaComponent } from '../inside-menu/micro-component/lingua/lingua.component';
import { NazioneComponent } from '../inside-menu/micro-component/nazione/nazione.component';
import { RestrizioniComponent } from '../inside-menu/micro-component/restrizioni/restrizioni.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    SearchMenuComponent,
    InsideMenuComponent,
    AspettoComponent,
    LinguaComponent,
    NazioneComponent,
    RestrizioniComponent,
    SearchMenuComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  exports: [SearchMenuComponent]
})
export class SearchMenuModuleModule { }
