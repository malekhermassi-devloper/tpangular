import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productAddForm : FormGroup ; 
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.productAddForm = this.fb.group({
      nameControle : [''],
      prixControle : [''],
      // availControle :[''],
      // taille : ['']
    });
  }
onAjouter(){
  // alert(this.productAddForm.controls.nameControle.value) ; 
  // // this.productAddForm.controls.prixControle.value ;
  alert(JSON.stringify(this.productAddForm.value));
}
}
