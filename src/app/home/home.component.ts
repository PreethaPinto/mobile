import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../products/products.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  brands: string[] = [];
  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe((data) => {
      this.products = data;
      this.brands = [...new Set(this.products.map((x) => x.product_name))];
    });
  }

  brandForm = new FormGroup({
    brand_name: new FormControl(''),
    brand_model: new FormControl(''),
  });
}
