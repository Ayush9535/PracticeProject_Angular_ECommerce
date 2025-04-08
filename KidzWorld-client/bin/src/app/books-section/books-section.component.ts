import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  loading: boolean = true; // <-- Add loader state

  constructor(
    private CartSvc: CartserviceService, 
    private productSvc: ProductserviceService,
    private toastService: HotToastService
  ) {}

  ngOnInit() {
    this.loading = true; // Start loader
    this.productSvc.getLimitedProducts(6).subscribe(
      (books) => {
        this.books = books;
        this.loading = false; // Stop loader when data is received
      },
      (error) => {
        console.error('Failed to fetch books:', error);
        this.toastService.error('Failed to load books!');
        this.loading = false; // Stop loader even if error occurs
      }
    );
  } 

  addToCartClicked(book: any) {
    console.log('Add to cart clicked:', book);
    const loadingToast = this.toastService.loading('Please wait..!');
    this.CartSvc.addToCart(book.id).subscribe(
      (data) => {
        console.log('Add to cart response:', data)
        loadingToast.close();
        this.toastService.success('Item added to cart');
      },
      (error) => {
        console.error('Add to cart error:', error);
        loadingToast.close();
        this.toastService.error('Failed to add item to cart');
      }
    );
  }
}
