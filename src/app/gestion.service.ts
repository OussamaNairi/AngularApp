import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private  http:HttpClient) { }

  getProduits(){
    return this.http.get(" http://chakerbm.tn/services/produits.php");
  }
  addProduit(prod:any){
    return this.http.post("http://chakerbm.tn/services/addProduit.php",prod);
  }
  deleteProduit(id:number){
    return this.http.get("http://chakerbm.tn/services/deleteProduit.php?id="+id);
  }
}
