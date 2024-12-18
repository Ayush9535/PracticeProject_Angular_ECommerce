import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksApiService } from '../books-api.service';
import { CartserviceService } from '../services/CartService/cartservice.service';
import { RouterLink } from '@angular/router';
import { Product, ProductserviceService } from '../services/ProductService/productservice.service';
import { HotToastService } from '@ngneat/hot-toast';


@Component({
  selector: 'app-books-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './books-section.component.html',
  styleUrl: './books-section.component.css'
})
export class BooksSectionComponent {
  books: Product[] = [];

  constructor(
    private CartSvc: CartserviceService, 
    private productSvc: ProductserviceService,
    private toastService: HotToastService
  ) {}

  ngOnInit() {
    this.productSvc.getLimitedProducts(6).subscribe((books) => {
      this.books = books;
    });
  } 

  addToCartClicked(book: any) {
    console.log('Add to cart clicked:', book);
    this.CartSvc.addToCart(book.id).subscribe((data) => {
      console.log('Add to cart response:', data)
      this.toastService.success('Item added to cart');
    });
  }
}
