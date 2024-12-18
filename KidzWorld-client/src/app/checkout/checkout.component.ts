import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartserviceService } from '../services/CartService/cartservice.service';
import CartItem from '../interfaces/CartItem';
import Address from '../interfaces/address';
import { OrderServiceService } from '../services/OrderService/order-service.service';
import { HotToastService } from '@ngneat/hot-toast';
import { RouterLink } from '@angular/router';

declare var Razorpay: any;
@Component({
  selector: 'app-checkout',
  standalone: true,
  templateUrl: './checkout.component.html',
  imports: [CommonModule, ReactiveFormsModule, RouterLink
  ],
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  currentStep: number = 0;
  orderId: string = '';
  steps: string[] = ['Review Order', 'Shipping', 'Order Placed'];
  savedAddresses: Address[] = [];
  disableSaveButton: boolean = false;

  shippingForm: FormGroup;

  constructor(private fb: FormBuilder, private CartSvc: CartserviceService, private OrderSvc: OrderServiceService, private cd: ChangeDetectorRef, private toastSvc: HotToastService) {
    this.shippingForm = this.fb.group({
      fullName: ['', [Validators.required]],
      addressLine1: ['', [Validators.required]],
      addressLine2: [''],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      country: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.CartSvc.getCart().subscribe((items) => {
      this.cartItems = items;
    });

    this.CartSvc.getSavedAddress().subscribe((addresses) => {
      this.savedAddresses = addresses;
    });

    this.shippingForm.valueChanges.subscribe(() => {
      if (this.disableSaveButton && this.shippingForm.dirty) {
        this.disableSaveButton = false;
      }
    });
  }

  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  nextStep(): void {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
      this.cd.detectChanges();
    }
  }

  prevStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  submitShippingAddress(event: Event): void {
    event.preventDefault();
    if (this.shippingForm.valid) {
      this.createTransaction();
    }
  }

  saveAddress() {
    this.CartSvc.addSavedAddress(this.shippingForm.value).subscribe((response) => {
      console.log('Address saved:', response);
      this.savedAddresses.push(this.shippingForm.value);
    });
  }

  useSavedAddress(address: Address) {
    this.shippingForm.patchValue(address);
    this.disableSaveButton = true;
  }

  removeSavedAddress(address: Address) {
    this.CartSvc.removeSavedAddress(address).subscribe((response) => {
      console.log('Address removed:', response);
      this.savedAddresses = this.savedAddresses.filter((addr) => addr !== address);
    });
  }

  createTransaction() {
    const total = this.calculateTotal();
    this.OrderSvc.createTransaction(total).subscribe(
      (response) => {
      console.log('Transaction created:', response);
      this.openTrasactionModal(response);
      }, (error) => {
        console.error('Error creating transaction:', error);
      }
    )
  }

  openTrasactionModal(response: any) {
    var options = {
      order_id: response.orderId,
      key: response.key,
      amount : response.amount,
      currency: response.currency,
      name: "KidzWorld",
      description: "Payment for your order",
      handler: (response : any)=>{
        this.processResponse(response);
      },
      prefill: {
        name: this.shippingForm.get('fullName')?.value,
        email: 'user@gmail.com',
        contact: '9999999999'
      },
      notes: {
        address: 'KidzWorld Online Shop'
      },
      theme: {
        color: '#F37254'
      },
      payment_options: {
        upi: true
      }
    }

    var rzp1 = new Razorpay(options);
    rzp1.open();
  }

  processResponse(response: any) {    
    this.orderId = response.razorpay_order_id;

    const order = {
      orderNumber: this.orderId,
      orderDate: new Date(),
      paymentMode: "Online",
      customerName: this.shippingForm.get('fullName')?.value,
      address: this.shippingForm.value,
      products: this.cartItems,
    }

    this.OrderSvc.addOrder(order).subscribe((response) => {
      console.log('Order added:', response);
      this.nextStep();
    }, (error) => {
      console.error('Error adding order:', error);
      this.toastSvc.error('Error placing order. Please try again later.');
    });
  }
}