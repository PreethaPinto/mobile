import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from '../home.component';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss'],
})
export class OrderDialogComponent implements OnInit {
  constructor(private service: HomeService) {}

  ngOnInit(): void {}

  orderForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    cust_phone: new FormControl(''),
    cust_address: new FormControl(),
    postcode: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
  });

  orderProduct() {
    this.service.orderProduct(this.orderForm.value as Customer).subscribe();
  }
}
