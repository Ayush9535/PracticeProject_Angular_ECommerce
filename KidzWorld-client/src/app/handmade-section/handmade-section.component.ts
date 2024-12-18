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

  handmadeItems: Product[] = []

  constructor(private CartSvc: CartserviceService, private productSvc: ProductserviceService, private toastService: HotToastService) {}

  ngOnInit(){
    this.productSvc.getProductsByCategory('handmade').subscribe((data: Product[]) => {
      this.handmadeItems = data;
    });
  }

  addToCartClicked(item: any) { 
    console.log('Add to cart clicked:', item);
    this.CartSvc.addToCart(item.id).subscribe((data) => {
      console.log('Add to cart response:', data)
      this.toastService.success('Item added to cart');
    });
  }

}
