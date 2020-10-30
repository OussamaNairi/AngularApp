import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
produit :any={"id":null,"description":"","quantite":0,"prix":0.0}
  constructor(private serv:GestionService,private route:Router) { }

  ngOnInit(): void {
  }
  saveProduit(){
    let prod=JSON.stringify(this.produit);
    this.serv.addProduit(prod).subscribe(
      (data) => {this.route.navigate(["liste"])},
       (err) => {console.log(err)}
    );
  }

}
