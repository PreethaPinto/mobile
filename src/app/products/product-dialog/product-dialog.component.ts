import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from 'src/app/product.service';
import { Product } from '../products.component';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
})
export class ProductDialogComponent implements OnInit {
  constructor(private service: ProductService) {}

  ngOnInit(): void {}

  productForm = new FormGroup({
    product_name: new FormControl(''),
    product_model: new FormControl(''),
    manufacturer: new FormControl(''),
    price: new FormControl(),
    stock_on_hand: new FormControl(),
    feature_id: new FormControl(),
  });

  addNewProduct() {
    this.service.addNewProduct(this.productForm.value as Product).subscribe();
  }
}
