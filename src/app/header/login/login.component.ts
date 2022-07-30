import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

// export interface Login {
//   username: string;
//   password: string;
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginDialogComponent implements OnInit {
  loginUserData: any = {};
  constructor(private _auth: AuthService) {}

  ngOnInit(): void {}

  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
      },
      (err) => console.log(err)
    );
  }

  // loginForm = new FormGroup({
  //   username: new FormControl(),
  //   password: new FormControl(),
  // });

  // loginUser() {
  //   this.service.loginUser(this.loginForm.value as Login).subscribe(
  //     (res) => {
  //       console.log(res);
  //       localStorage.setItem('token', res.token);
  //     },
  //     (err) => console.log(err)
  //   );
  // }
}
