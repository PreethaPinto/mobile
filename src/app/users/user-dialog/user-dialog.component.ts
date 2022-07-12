import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    user_role: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  addNewUser() {
    this.service.addNewUser(this.userForm.value as User).subscribe();
  }
}
