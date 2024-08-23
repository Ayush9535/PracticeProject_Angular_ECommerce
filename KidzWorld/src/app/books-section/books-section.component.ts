import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksApiService } from '../books-api.service';
import { CartserviceService } from '../CartService/cartservice.service';

@Component({
  selector: 'app-books-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books-section.component.html',
  styleUrl: './books-section.component.css'
})
export class BooksSectionComponent {
  books: any;

  constructor(private BooksSvc: BooksApiService , private CartSvc: CartserviceService) { }

  ngOnInit() {
    this.BooksSvc.getBooks().subscribe((data) => {
      this.books = data;
      console.log(this.books);
    });
  }

  addToCartClicked(book: any){
    console.log('Add to cart clicked:', book);
    this.CartSvc.addToCart(book);
  }
}
