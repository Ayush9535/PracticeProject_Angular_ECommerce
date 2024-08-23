import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  cart: any;

  constructor() { 
    const StoredCart = localStorage.getItem('cart');
    this.cart = StoredCart ? JSON.parse(StoredCart) : [];
  }

  addToCart(book: any){
    this.cart.push(book);
    this.saveCart();
    console.log('Book added to cart:', book);
  }

  getCart(){
    console.log('Cart:', this.cart);
    return this.cart;
  }

  getTotal(){
    let total = 0;
    this.cart.forEach((book: any) => {
      total += parseFloat(book.price.displayValue);
    });
    console.log('Total:', total);
    return total;
  }

  saveCart(){
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
    console.log('Cart cleared');
  }
}
