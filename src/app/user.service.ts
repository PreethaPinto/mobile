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

  addNewUser(user: User) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(user);
    console.log(body);
    return this.http.post(this.baseURL + 'users', body, {
      headers: headers,
    });
  }

  updateUser(user: User) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(user);
    console.log(body);
    return this.http.put(this.baseURL + 'users', body, {
      headers: headers,
    });
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseURL + 'users/' + id);
  }
}
