import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './components/shared/shared.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { QuienesComponent } from './components/quienes/quienes.component';
import { MenuComponent } from './templates/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    NavbarComponent,
    HomeComponent,
    QuienesComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
