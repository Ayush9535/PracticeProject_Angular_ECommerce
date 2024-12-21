import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartserviceService } from '../services/CartService/cartservice.service';
import { RouterLink } from '@angular/router';
import { Product } from '../services/ProductService/productservice.service';
import CartItem from '../interfaces/CartItem';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems: CartItem[] = [];
  shipping: number = 0;
  subtotal: number = 0;
  total: number = 0;
  totalItems: number = 0;
  loading: boolean = true;

  constructor(private Cartsvc: CartserviceService) {}

  ngOnInit() {
    this.loading = true;
    this.Cartsvc.getCart().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      console.log(this.cartItems);
      this.updateTotal();
      this.loading = false;
    });
  }

  decrementItem(item: CartItem) {
    if (item.quantity > 1) {
      this.Cartsvc.removeFromCart(item.product.id).subscribe(() => {
        item.quantity--;
        this.updateTotal();
      });
    }else{
      this.removeItem(item);
    }
  }

  removeItem(item: CartItem) {
    this.Cartsvc.removeCompleteItem(item.product.id).subscribe(() => {
      this.cartItems = this.cartItems.filter(i => i.product.id !== item.product.id);
      this.updateTotal();
    });
  }

  addItem(item: CartItem) {
    this.Cartsvc.addToCart(item.product.id).subscribe(() => {
      const cartItem = this.cartItems.find(i => i.product.id === item.product.id);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        this.cartItems.push({ product: item.product, quantity: 1 });
      }
      this.updateTotal();
    });
  }

  updateTotal() {
    this.subtotal = this.cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
    this.totalItems = this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
    this.total = this.subtotal + this.shipping;
  }
}

