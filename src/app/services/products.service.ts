import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsData {
  private apiURL = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}
  getProducts(): Observable<string[]> {
    return this.http
      .get<{ products: any[] }>(this.apiURL)
      .pipe(map((response) => response.products));
  }
}
