import { Component, OnInit } from '@angular/core';
import { RezervacijaService } from '../servisi/rezervacija.service';

@Component({
  selector: 'app-rezervacija',
  templateUrl: './rezervacija.component.html',
  styleUrls: ['./rezervacija.component.css']
})
export class RezervacijaComponent implements OnInit {
  
  listaRezervacija: any;
  klikovi = 0;
  
  constructor(public rezeracijaService: RezervacijaService) { }

  ngOnInit() {
    this.rezeracijaService.getRezervacijas().subscribe(response => {
      this.listaRezervacija = response;
      console.log(" ######## TEST  IN");
      console.log(this.listaRezervacija);
    });
  }

  incKlik(){
    this.klikovi++;
  }

}
