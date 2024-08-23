import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksApiService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get('https://private-anon-88922c4fa8-bookstore.apiary-mock.com/data/books');
  }
}
