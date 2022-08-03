import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Customer } from '../home.component';
import { HomeService } from 'src/app/home.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/products/products.component';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss'],
})
export class OrderDialogComponent implements OnInit {
  constructor(
    private service: HomeService,
    @Inject(MAT_DIALOG_DATA) public product: Product
  ) {}

  ngOnInit(): void {}

  orderForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    cust_phone: new FormControl('', Validators.required),
    cust_address: new FormControl('', Validators.required),
    postcode: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    product_id: new FormControl(this.product.product_id),

    // price: new FormControl(this.product.price),
  });

  orderProduct() {
    this.service.orderProduct(this.orderForm.value as Customer).subscribe();
  }
}
