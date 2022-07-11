import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { User } from '../users.component';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss'],
})
export class UserDialogComponent implements OnInit {
  constructor(private service: UserService) {}

  ngOnInit(): void {}

  userForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    user_role: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });

  addNewUser() {
    this.service.addNewUser(this.userForm.value as User).subscribe();
  }
}
