import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OrderServiceService } from '../../services/OrderService/order-service.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-myorders',
  standalone: true,
  imports: [CommonModule, RouterLink
  ],
  templateUrl: './myorders.component.html',
  styleUrl: './myorders.component.css'
})
export class MyordersComponent {
  orders: any = [];

  constructor(private orderSvc: OrderServiceService){ }

  ngOnInit(): void {
    this.orderSvc.getOrders().subscribe((data: any) => {
      this.orders = data;
    });
  }

  toggleOrderExpand(order: any): void {
    order.expanded = !order.expanded;
  }

  calculateOrderTotal(orderProducts: any): string {
    return orderProducts.reduce((acc: number, product: any) => {
      return acc + (product.product.price * product.quantity);
    }, 0).toFixed(2);
  }
}
