import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';

export interface Product {
  product_id: number;
  product_name: string;
  product_model: string;
  manufacturer: string;
  price: number;
  stock_on_hand: number;
  feature_id: number;
}

const ELEMENT_DATA: Product[] = [
  {"product_id": 2, "product_name":"iPhone 13", "product_model":"Mini", "manufacturer":"Apple", "price":1500, "stock_on_hand": 100, "feature_id": 1},
  {"product_id": 3, "product_name":"Galaxy 23", "product_model":"Ultra", "manufacturer":"Samsung", "price":1200, "stock_on_hand": 200, "feature_id": 2}
];


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['product_id', 'product_name', 'product_model', 'manufacturer', 'price', 'stock_on_hand', 'feature_id'];
  dataSource = ELEMENT_DATA;



  ngOnInit(): void {
  }

  constructor(public dialog: MatDialog) {}
   addNewProduct() {
    this.dialog.open(ProductDialogComponent)
    .afterClosed().subscribe(result => {
       console.log(`Dialog result: ${result}`)});
     }

}


