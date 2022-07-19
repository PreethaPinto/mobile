import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../product.service';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';

export interface Product {
  product_id?: number;
  product_name: string;
  product_model: string;
  manufacturer: string;
  imageUrl: string;
  price: number;
  stock_on_hand: number;
  feature_id: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = [
    'product_id',
    'product_name',
    'product_model',
    'manufacturer',
    'price',
    'stock_on_hand',
    'feature_id',
    'delete',
  ];

  dataSource: any;

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.service.getProducts([]).subscribe((data) => {
      this.dataSource = data;
    });
  }

  constructor(public dialog: MatDialog, private service: ProductService) {}
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
}
