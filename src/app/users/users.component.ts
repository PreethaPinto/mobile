import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../user.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

export interface User {
  user_id: number;
  firstname: string;
  lastname: string;
  user_role: string;
  username: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(public dialog: MatDialog, private service: UserService) {}

  displayedColumns: string[] = [
    'user_id',
    'firstname',
    'lastname',
    'user_role',
    'username',
    'delete',
    'edit',
  ];

  dataSource: any;

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.service.getUsers().subscribe((data) => {
      this.dataSource = data;
    });
  }

  addNewUser() {
    this.dialog
      .open(UserDialogComponent, { width: '50vw' })
      .afterClosed()
      .subscribe((result) => {
        this.refreshList();
      });
  }

  deleteUser(user_id: number) {
    this.service.deleteUser(user_id).subscribe((user) => {
      this.refreshList();
    });
  }

  editUser(user: User) {
    this.dialog
      .open(UserDialogComponent, { data: user, width: '50vw' })
      .afterClosed()
      .subscribe((result) => {
        this.refreshList();
      });
  }
}
