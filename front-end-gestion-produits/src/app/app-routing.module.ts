import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProduitsComponent} from "./produits/produits.component";
import {NouveauProduitComponent} from "./nouveau-produit/nouveau-produit.component";

const routes: Routes = [
  {
    path:"produits",component:ProduitsComponent
  },
  {
    path:"nouveau-produit",component:NouveauProduitComponent
  },
  {
    path:"",redirectTo:"/produits",pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
