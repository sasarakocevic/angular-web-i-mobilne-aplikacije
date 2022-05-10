import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RezervacijaComponent } from './rezervacija/rezervacija.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { GostComponent } from './gost/gost.component';
import { DrzaveComponent } from './drzave/drzave.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RezervacijaComponent,
    PocetnaComponent,
    GostComponent,
    DrzaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
