import { Component, OnInit } from '@angular/core';
import * as internal from 'assert';
import { DrzavaService } from '../servisi/drzava.service';

@Component({
  selector: 'app-drzave',
  templateUrl: './drzave.component.html',
  styleUrls: ['./drzave.component.css']
})
export class DrzaveComponent implements OnInit {
objekat: {
  code: any,
  sadrzaj: string
}
  listDrzava: any;
  drzava: string;
  showAddDrzavu: boolean;

  constructor(public drzavaService: DrzavaService) { 
    this.showAddDrzavu = false;
  }

  ngOnInit() {
    this.drzavaService.getAll().subscribe(
      response => {
        this.listDrzava = response;
        console.log("##### response");
        console.log(response);
    })
  }

  dodajDrzavu() {
    if(this.drzava != null || this.drzava != ""){
      this.drzavaService.save({naziv:this.drzava}).subscribe(
        response=>{
          console.log(response);
        }
        );
    }else{
      alert("Popuni polje naziv")
    }
  }
}
