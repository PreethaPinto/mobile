import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SidenavComponent } from '../sidenav.component';
@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
})
export class LoginDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  loginUser() {
    // this.service.loginUser(this.loginForm.value as Login).subscribe();
  }
}
