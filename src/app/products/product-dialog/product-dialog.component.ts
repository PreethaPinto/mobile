import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/product.service';
import { Product } from '../products.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
})
export class ProductDialogComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private service: ProductService,
    @Inject(MAT_DIALOG_DATA) public product: Product
  ) {}

  ngOnInit(): void {}

  productForm = new FormGroup({
    product_id: new FormControl(this.product?.product_id),
    feature_id: new FormControl(this.product?.feature_id),
    product_name: new FormControl(
      this.product?.product_name,
      Validators.required
    ),
    product_model: new FormControl(
      this.product?.product_model,
      Validators.required
    ),
    manufacturer: new FormControl(
      this.product?.manufacturer,
      Validators.required
    ),
    price: new FormControl(this.product?.price, Validators.required),
    stock_on_hand: new FormControl(
      this.product?.stock_on_hand,
      Validators.required
    ),
    imageUrl: new FormControl(this.product?.imageUrl, Validators.required),
    weight: new FormControl(this.product?.weight, Validators.required),
    dimensions: new FormControl(this.product?.dimensions, Validators.required),
    OS: new FormControl(this.product?.OS, Validators.required),
    screensize: new FormControl(this.product?.screensize, Validators.required),
    resolution: new FormControl(this.product?.resolution, Validators.required),
    CPU: new FormControl(this.product?.CPU, Validators.required),
    RAM: new FormControl(this.product?.RAM, Validators.required),
    storage: new FormControl(this.product?.storage, Validators.required),
    battery: new FormControl(this.product?.battery, Validators.required),
    rear_camera: new FormControl(
      this.product?.rear_camera,
      Validators.required
    ),
    front_camera: new FormControl(
      this.product?.front_camera,
      Validators.required
    ),
  });

  addNewProduct() {
    if (this.product)
      this.service
        .editProduct(this.productForm.value as Product)
        .subscribe(() => {
          this.dialog.closeAll();
        });
    else
      this.service
        .addNewProduct(this.productForm.value as Product)
        .subscribe(() => {
          this.dialog.closeAll();
        });
  }
}
