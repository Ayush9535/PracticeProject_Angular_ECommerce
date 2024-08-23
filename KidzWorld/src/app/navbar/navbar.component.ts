import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartserviceService } from '../CartService/cartservice.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router , private CartSvc: CartserviceService){}

  navigateToSignIn(){
    this.router.navigate(['/signin']);
  }

  cartClicked(){
    // this.router.navigate(['/cart']);
    console.log(this.CartSvc.getCart());
    console.log(this.CartSvc.getTotal());
  }
}
