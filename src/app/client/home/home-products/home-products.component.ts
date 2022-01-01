import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Produit } from 'src/app/shared/models/produit';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent implements OnInit {
  title = "PRODUITS" ;
  produits : Produit[] ;
  
  onDetail(prod: Produit){
    alert(prod.description) ;
  }
  getProducts(): void {
    this.produits = this.productService.getProducts();
   }
  constructor(private productService: ProductService) {}
  selectedProd : Produit ; 
  onselecteprod(p : Produit):void{
    this.selectedProd =p ; 
  }
  
  ngOnInit(): void {
    this.getProducts()
}
}
