import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChangelogService {
  private baseURL = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}
  getChangeLog() {
    return this.http.get(this.baseURL + 'changelog');
  }
}
