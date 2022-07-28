import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './login.service';

export interface Login {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
})
export class LoginDialogComponent implements OnInit {
  constructor(private service: LoginService) {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  loginUser() {
    this.service.loginUser(this.loginForm.value as Login).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
      },
      (err) => console.log(err)
    );
  }
}
