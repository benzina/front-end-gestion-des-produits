import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  public produits:any;

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  onGetProduits() {
    this.httpClient.get("http://localhost:8081/produits")
      .subscribe(data=>{
        this.produits=data;
      },error => {
        console.log(error);
      })

  }
}
