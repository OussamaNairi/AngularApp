import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  produits:any=[];
  constructor(private serv:GestionService,private route:Router) { }

  ngOnInit(): void {
    this.serv.getProduits().subscribe(
      (data) => {this.produits=data},
       (err) => {console.log(err)}
    );
  }
  delete(id:number){
    this.serv.deleteProduit(id).subscribe(
      (data) => {this.ngOnInit();this.route.navigate(["liste"])},
       (err) => {console.log(err)}
    );
  }

}
