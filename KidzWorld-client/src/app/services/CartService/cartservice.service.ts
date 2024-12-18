import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieServiceService } from '../CookieService/cookie-service.service';
import { Product } from '../ProductService/productservice.service';
import { CartResponse } from '../../interfaces/CartResponse';
import CartItem from '../../interfaces/CartItem';
import Address from '../../interfaces/address';

@Injectable({
  providedIn: 'root',
})
export class CartserviceService {
  private cartUrl = 'http://localhost:8080/getCart';  
  private addToCartUrl = 'http://localhost:8080/addToCart'; 
  private removeFromCartUrl = 'http://localhost:8080/removeFromCart'; 
  private removeCompletelyFromCartUrl = 'http://localhost:8080/removeCompletelyFromCart'; 
  private clearCartUrl = 'http://localhost:8080/clearCart';  

  private cart: CartItem[] = [];

  constructor(private http: HttpClient, private cookieSvc: CookieServiceService) {}

  private getToken(): string {
    const token = this.cookieSvc.getCookie('JWT');
    return token ? `Bearer ${token}` : '';
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': this.getToken(),
    });
  }

  getCart(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.cartUrl, { headers: this.getHeaders() });
  }

  addToCart(productId: string): Observable<CartResponse> {
    return this.http.post<CartResponse>(`${this.addToCartUrl}/${productId}`, {}, { headers: this.getHeaders() });
  }

  removeFromCart(productId: string): Observable<CartResponse> {
    return this.http.post<CartResponse>(`${this.removeFromCartUrl}/${productId}`, {}, { headers: this.getHeaders() });
  }

  removeCompleteItem(productId: string): Observable<CartResponse> {
    return this.http.post<CartResponse>(`${this.removeCompletelyFromCartUrl}/${productId}`, {}, { headers: this.getHeaders() });
  }

  clearCart(): Observable<CartResponse> {
    return this.http.get<CartResponse>(this.clearCartUrl, { headers: this.getHeaders() });
  }

  getCartSize(): number {
    return this.cart.reduce((acc, product) => acc + product.quantity, 0);
  }

  getSavedAddress(): Observable<Address[]> {
    return this.http.get<Address[]>('http://localhost:8080/getSavedAddresses', { headers: this.getHeaders() });
  } 

  addSavedAddress(address: Address): Observable<CartResponse> {
    return this.http.post<CartResponse>('http://localhost:8080/addSavedAddress', address, { headers: this.getHeaders() });
  }

  removeSavedAddress(address: Address): Observable<CartResponse> {
    return this.http.post<CartResponse>(`http://localhost:8080/removeSavedAddress`, address, { headers: this.getHeaders() });
  }

}

