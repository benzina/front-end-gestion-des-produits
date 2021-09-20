import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CatalogueService} from "../services/catalogue.service";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  public produits:any;
  public size:number=5;
  public currentPage:number=0;
  // @ts-ignore
  public totalPages:number;
  // @ts-ignore
  public pages:Array<number>;
  // @ts-ignore
  public currentKeyword:string;

  constructor(private catService:CatalogueService) { }

  ngOnInit(): void {
  }

  onGetProduits() {
    this.catService.getProduits(this.currentPage,this.size)
      .subscribe(data=>{
        // @ts-ignore
        this.totalPages=data["page"].totalPages;
        this.pages = new Array<number>(this.totalPages);
        this.produits=data;
      },error => {
        console.log(error);
      })

  }

  onChercheProduits(form: any){
    this.currentPage=0;
    this.currentKeyword = form.motsCle;
    this.chercheProduits();
  }

  chercheProduits() {
    this.catService.getProduitsByKeyWord(this.currentKeyword,this.currentPage,this.size)
      .subscribe(data=>{
        // @ts-ignore
        this.totalPages=data["page"].totalPages;
        this.pages = new Array<number>(this.totalPages);
        this.produits=data;
      },error => {
        console.log(error);
      })


  }

    onGetPageProducts(i: number) {
    this.currentPage=i;
    // @ts-ignore
      this.chercheProduits();
    }
}
