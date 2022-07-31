import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/product.service';
import { Product } from '../products.component';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
})
export class ProductDialogComponent implements OnInit {
  constructor(
    private service: ProductService,
    @Inject(MAT_DIALOG_DATA) public product: Product
  ) {}

  ngOnInit(): void {}

  productForm = new FormGroup({
    product_id: new FormControl(this.product?.product_id),
    feature_id: new FormControl(this.product?.feature_id),
    product_name: new FormControl(this.product?.product_name),
    product_model: new FormControl(this.product?.product_model),
    manufacturer: new FormControl(this.product?.manufacturer),
    price: new FormControl(this.product?.price),
    stock_on_hand: new FormControl(this.product?.stock_on_hand),
    imageUrl: new FormControl(this.product?.imageUrl),
    weight: new FormControl(this.product?.weight),
    dimensions: new FormControl(this.product?.dimensions),
    OS: new FormControl(this.product?.OS),
    screensize: new FormControl(this.product?.screensize),
    resolution: new FormControl(this.product?.resolution),
    CPU: new FormControl(this.product?.CPU),
    RAM: new FormControl(this.product?.RAM),
    storage: new FormControl(this.product?.storage),
    battery: new FormControl(this.product?.battery),
    rear_camera: new FormControl(this.product?.rear_camera),
    front_camera: new FormControl(this.product?.front_camera),
  });

  addNewProduct() {
    if (this.product)
      this.service.editProduct(this.productForm.value as Product).subscribe();
    else
      this.service.addNewProduct(this.productForm.value as Product).subscribe();
  }
}
