import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../product.service';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

export interface Product {
  product_id?: number;
  product_name: string;
  product_model: string;
  manufacturer: string;
  imageUrl: string;
  price: number;
  stock_on_hand: number;
  feature_id: number;
  weight: number;
  dimensions: number;
  OS: number;
  screensize: number;
  resolution: number;
  CPU: number;
  RAM: number;
  storage: number;
  battery: number;
  rear_camera: number;
  front_camera: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private service: ProductService,
    private router: Router
  ) {}

  displayedColumns: string[] = [
    'product_id',
    'product_name',
    'product_model',
    'manufacturer',
    'price',
    'stock_on_hand',
    'feature_id',
    'delete',
    'edit',
  ];

  dataSource: any;

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.service.getProducts([], [], true).subscribe(
      (res) => (this.dataSource = res),
      (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/login']);
          }
        }
      }
    );
  }

  addNewProduct() {
    this.dialog
      .open(ProductDialogComponent)
      .afterClosed()
      .subscribe((result) => {
        this.refreshList();
      });
  }

  deleteProduct(product_id: number) {
    this.service.deleteProduct(product_id).subscribe((product) => {
      this.refreshList();
    });
  }

  editProduct(product: Product) {
    this.dialog
      .open(ProductDialogComponent, { data: product })
      .afterClosed()
      .subscribe((result) => {
        this.refreshList();
      });
  }
}
