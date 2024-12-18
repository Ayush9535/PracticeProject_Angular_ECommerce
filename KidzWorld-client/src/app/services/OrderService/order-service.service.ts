import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieServiceService } from '../CookieService/cookie-service.service';

interface Transaction {
  orderId: string;
  amount: number;
  currency: string;
  key: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http: HttpClient, private cookieSvc: CookieServiceService) { }

  private getToken(): string {
      const token = this.cookieSvc.getCookie('JWT');
      return token ? `Bearer ${token}` : '';
    }
  
    private getHeaders(): HttpHeaders {
      return new HttpHeaders({
        'Authorization': this.getToken(),
      });
    }

  public createTransaction(amount: Number){
    return this.http.post<Transaction>(`http://localhost:8080/createTransaction`, {"amount": amount} , { headers: this.getHeaders()})
  }

  public addOrder(order: any){
    return this.http.post(`http://localhost:8080/addOrder`, order, { headers: this.getHeaders()})
  }

  public getOrders(){
    return this.http.get(`http://localhost:8080/getOrders`, { headers: this.getHeaders()})
  }

  public getOrder(orderId: string){
    return this.http.get(`http://localhost:8080/getOrder/${orderId}`, { headers: this.getHeaders()})
  }
}
