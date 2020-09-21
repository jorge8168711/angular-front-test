import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private API_URL = environment.api;

  constructor(private http: HttpClient) {}

  getProducts(): Promise<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}/products`).toPromise();
  }
}
