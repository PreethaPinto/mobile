import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './users/users.component';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseURL = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.baseURL + 'users');
  }
}
