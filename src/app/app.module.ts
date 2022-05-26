import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchMenuModuleModule } from './components/search-menu/search-menu-module/search-menu-module.module';
import { SideOpenComponent } from './components/side-nav/side-open/side-open.component';
import { SideCloseComponent } from './components/side-nav/side-open/side-close/side-close.component';
import { LoginButtonComponent } from './components/shared/design/login-button/login-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SideOpenComponent,
    SideCloseComponent,
    LoginButtonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchMenuModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
