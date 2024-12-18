import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartserviceService } from '../services/CartService/cartservice.service';
import { Product, ProductserviceService } from '../services/ProductService/productservice.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-games-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games-section.component.html',
  styleUrl: './games-section.component.css'
})
export class GamesSectionComponent {
  games: Product[] = [];

  constructor(private CartSvc: CartserviceService, private productSvc: ProductserviceService, private toastService: HotToastService) {}

  ngOnInit() {
    this.productSvc.getProductsByCategory("games").subscribe((products) => {
      this.games = products;
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
