import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginDialogComponent implements OnInit {
  constructor(
    public _authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
  loginUserData: any = {};

  ngOnInit(): void {}

  loginUser() {
    this._authService.loginUser(this.loginUserData).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/products']);
      },
      (err) => {
        this.snackBar.open('Invalid username or password', undefined, {
          duration: 3000,
        });
      }
    );
  }
}
