import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/user.service';
import { User } from '../users.component';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss'],
})
export class UserDialogComponent implements OnInit {
  constructor(
    private service: UserService,
    @Inject(MAT_DIALOG_DATA) public user: User
  ) {}

  ngOnInit(): void {}

  userForm = new FormGroup({
    firstname: new FormControl(this.user?.firstname, Validators.required),
    lastname: new FormControl(this.user?.lastname, Validators.required),
    user_role: new FormControl(this.user?.user_role, Validators.required),
    username: new FormControl(this.user?.username, Validators.required),
    password: new FormControl(
      { disabled: !!this.user?.firstname, value: '' },
      Validators.required
    ),
  });

  addNewUser() {
    this.service.addNewUser(this.userForm.value as User).subscribe();
  }
  updateUser() {
    var user: any = this.userForm.value;
    user.user_id = this.user.user_id;
    this.service.updateUser(this.userForm.value as User).subscribe();
  }
}
