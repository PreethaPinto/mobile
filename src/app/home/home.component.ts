import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../products/products.component';
import { FormGroup, FormControl } from '@angular/forms';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';

export interface Customer {
  order_id?: number;
  firstname: string;
  lastname: string;
  cust_phone?: number;
  cust_address: string;
  postcode?: number;
  city: string;
  state: string;
  quantity?: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = [
    'customer_id',
    'firstname',
    'lastname',
    'cust_phone',
    'cust_address',
    'postcode',
    'city',
    'state',
    'quantity',
  ];
  dataSource: any;

  products: Product[] = [];
  brands: string[] = [];
  prices: Price[] = [
    { value: '<500', label: 'Less than $500' },
    { value: '500-1000', label: '500 - 1000' },
    { value: '>1000', label: 'More than 1000' },
  ];
  constructor(public dialog: MatDialog, private service: ProductService) {}

  ngOnInit(): void {
    this.service.getProducts([], []).subscribe((data) => {
      this.products = data;
      this.brands = [...new Set(this.products.map((x) => x.product_name))];
    });

    this.brandForm.controls.brandNames.valueChanges
      .pipe(filter(Boolean))
      .subscribe((brandNames) => {
        this.service.getProducts(brandNames, []).subscribe((data) => {
          this.products = data;
        });
      });

    this.brandForm.controls.price.valueChanges
      .pipe(filter(Boolean))
      .subscribe((price) => {
        this.service.getProducts([], price).subscribe((data) => {
          this.products = data;
        });
      });
  }

  brandForm = new FormGroup({
    brandNames: new FormControl<string[]>([]),
    price: new FormControl<string[]>([]),
  });

  orderProduct(product: Product) {
    this.dialog
      .open(OrderDialogComponent, { data: product, width: '50vw' })
      .afterClosed()
      .subscribe();
  }
}

export interface Price {
  label: string;
  value: string;
}
