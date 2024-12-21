import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartserviceService } from '../services/CartService/cartservice.service';
import { Product, ProductserviceService } from '../services/ProductService/productservice.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-handmade-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './handmade-section.component.html',
  styleUrl: './handmade-section.component.css'
})
export class HandmadeSectionComponent {

  handmadeItems: Product[] = [];
  loading: boolean = true; // <-- Added loading state

  constructor(
    private CartSvc: CartserviceService, 
    private productSvc: ProductserviceService, 
    private toastService: HotToastService
  ) {}

  ngOnInit() {
    this.loading = true; // Show loader initially
    this.productSvc.getProductsByCategory('handmade').subscribe(
      (data: Product[]) => {
        this.handmadeItems = data;
        this.loading = false; // Hide loader once data is loaded
      },
      (error) => {
        console.error('Failed to fetch handmade items:', error);
        this.toastService.error('Failed to load handmade items!');
        this.loading = false; // Hide loader even if error occurs
      }
    );
  }

  addToCartClicked(item: any) {
    console.log('Add to cart clicked:', item);
    const loadingToast = this.toastService.loading('Please wait..!');
    this.CartSvc.addToCart(item.id).subscribe(
      (data) => {
        console.log('Add to cart response:', data);
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
