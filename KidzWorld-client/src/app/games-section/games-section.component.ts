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
  loading: boolean = true; // <-- Added loading variable

  constructor(
    private CartSvc: CartserviceService, 
    private productSvc: ProductserviceService, 
    private toastService: HotToastService
  ) {}

  ngOnInit() {
    this.loading = true; // Show loader initially
    this.productSvc.getProductsByCategory('games').subscribe(
      (products) => {
        this.games = products;
        this.loading = false; // Hide loader when data is loaded
      },
      (error) => {
        console.error('Failed to fetch games:', error);
        this.toastService.error('Failed to load games!');
        this.loading = false; // Hide loader even if error occurs
      }
    );
  }

  addToCartClicked(game: any) {
    console.log('Add to cart clicked:', game);
    // const loadingToast = this.toastService.loading('Please wait..!');
    this.CartSvc.addToCart(game.id).subscribe(
      (data) => {
        console.log('Add to cart response:', data);
        // loadingToast.close();
        this.toastService.success('Item added to cart');
      },
      (error) => {
        console.error('Add to cart error:', error);
        // loadingToast.close();
        this.toastService.error('Failed to add item to cart');
      }
    );
  }
}
