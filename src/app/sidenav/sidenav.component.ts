import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../header/login/login.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  // loginUser() {
  //   this.dialog.open(LoginDialogComponent);
  //   // .afterClosed()
  //   // .subscribe((result) => {
  //   //   this.refreshList();
  //   // });
  // }
}
