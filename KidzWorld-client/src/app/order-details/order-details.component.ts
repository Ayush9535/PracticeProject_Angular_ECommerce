import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router'; 
import { OrderServiceService } from '../services/OrderService/order-service.service';
@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [CommonModule, RouterLink
  ],
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'] 
})
export class OrderDetailsComponent implements OnInit {
  order: any = {};
  loading: boolean = true;

  constructor(
    private orderSvc: OrderServiceService,
    private route: ActivatedRoute 
  ) {}

  ngOnInit(): void {
    this.loading = true;
    const orderNumber = this.route.snapshot.paramMap.get('orderNumber');
    console.log(orderNumber);
    if (orderNumber) {
      this.orderSvc.getOrder(orderNumber).subscribe((data: any) => {
        this.order = data;
        console.log(this.order);
        this.loading = false;
      });
    }
  }

  calculateOrderTotal(): string {
    return this.order.products.reduce((acc: number, product: any) => {
      return acc + (product.product.price * product.quantity);
    }, 0).toFixed(2);
  }
}
