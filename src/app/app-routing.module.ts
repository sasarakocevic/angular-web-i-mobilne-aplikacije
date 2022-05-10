import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GostComponent } from './gost/gost.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { RezervacijaComponent } from './rezervacija/rezervacija.component';
import { DrzaveComponent } from './drzave/drzave.component';

const routes: Routes = [
  {path:'',component:PocetnaComponent},
  {path:'lista-rezervacija',component:RezervacijaComponent},
  {path:'lista-gostiju',component:GostComponent},
  {path:'drzave',component:DrzaveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
