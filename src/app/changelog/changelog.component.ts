import { Component, OnInit } from '@angular/core';
import { ChangelogService } from '../changelog.service';
import { FormGroup, FormControl } from '@angular/forms';
import { filter } from 'rxjs';

export interface Changelog {
  product_name: string;
  username: string;
  date_created: string;
  date_last_modified: string;
}

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss'],
})
export class ChangelogComponent implements OnInit {
  constructor(private service: ChangelogService) {}

  displayedColumns: string[] = [
    'product_name',
    'username',
    'date_created',
    'date_last_modified',
  ];

  dataSource: any;

  changeLog: Changelog[] = [];
  products: string[] = [];
  users: string[] = [];
  dates: string[] = [];

  ngOnInit(): void {
    this.service.getChangeLog().subscribe((data) => {
      this.dataSource = data;
    });

    this.service.getProduct([]).subscribe((data: any) => {
      this.changeLog = data;
      this.products = [...new Set(this.changeLog.map((x) => x.product_name))];
    });

    this.changelogForm.controls.productNames.valueChanges
      .pipe(filter(Boolean))
      .subscribe((productNames) => {
        this.service.getProduct(productNames).subscribe((data: any) => {
          this.products = data;
        });
      });

    this.service.getUsers([]).subscribe((data: any) => {
      this.changeLog = data;
      this.users = [...new Set(this.changeLog.map((x) => x.username))];
    });

    this.changelogForm.controls.userNames.valueChanges
      .pipe(filter(Boolean))
      .subscribe((userNames) => {
        this.service.getUsers(userNames).subscribe((data: any) => {
          this.users = data;
        });
      });
  }

  changelogForm = new FormGroup({
    productNames: new FormControl<string[]>([]),
    userNames: new FormControl<string[]>([]),
    date: new FormControl<string[]>([]),
    start: new FormControl<string[]>([]),
    end: new FormControl<string[]>([]),
  });
}
