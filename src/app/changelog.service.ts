import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Changelog } from './changelog/changelog.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChangelogService {
  private baseURL = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}
  getChangeLog() {
    return this.http.get(this.baseURL + 'changelog');
  }

  getProduct(products: string[]): Observable<Changelog[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.appendAll({ products: products.toString() });

    return this.http.get<Changelog[]>(
      this.baseURL + 'changelog?' + queryParams
    );
  }

  getUsers(users: string[]): Observable<Changelog[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.appendAll({ users: users.toString() });
    return this.http.get<Changelog[]>(
      this.baseURL + 'changelog?' + queryParams
    );
  }
}
