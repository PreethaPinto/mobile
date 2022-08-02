import { Component, OnInit } from '@angular/core';
import { ChangelogService } from '../changelog.service';
import { FormGroup, FormControl } from '@angular/forms';

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

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.service.getChangeLog().subscribe((data) => {
      this.dataSource = data;
    });
  }

  changelogForm = new FormGroup({
    products: new FormControl<string[]>([]),
    user: new FormControl<string[]>([]),
  });
}
