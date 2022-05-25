import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchMenuComponent } from './components/search-menu/search-menu.component';
import { InsideMenuComponent } from './components/search-menu/inside-menu/inside-menu.component';
import { AspettoComponent } from './components/search-menu/inside-menu/micro-component/aspetto/aspetto.component';
import { LinguaComponent } from './components/search-menu/inside-menu/micro-component/lingua/lingua.component';
import { NazioneComponent } from './components/search-menu/inside-menu/micro-component/nazione/nazione.component';
import { RestrizioniComponent } from './components/search-menu/inside-menu/micro-component/restrizioni/restrizioni.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
  declarations: [
    AppComponent,
    SearchMenuComponent,
    InsideMenuComponent,
    AspettoComponent,
    LinguaComponent,
    NazioneComponent,
    RestrizioniComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
