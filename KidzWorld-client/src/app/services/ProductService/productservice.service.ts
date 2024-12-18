import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieServiceService } from '../CookieService/cookie-service.service';

export interface Product {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  price: number;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  private apiUrl = 'http://localhost:8080';

  
  private token = this.cookieSvc.getCookie('JWT');
  private headers = new HttpHeaders({
    'Authorization': this.token ? `Bearer ${this.token}` : ''
  });


  constructor(private http: HttpClient, private cookieSvc: CookieServiceService) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/getProducts`, { headers: this.headers });
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/getProduct/${id}`, { headers: this.headers });
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    console.log(this.token)
    return this.http.get<Product[]>(`${this.apiUrl}/getProducts/${category}`, {
      headers: {
        "Authorization": this.token ? `Bearer ${this.token}` : ''
      }
    });
  }

  getLimitedProducts(limit: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/getLimitedProducts/${limit}`, { headers: this.headers });
  }
}
