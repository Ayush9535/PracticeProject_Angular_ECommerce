import { Component } from '@angular/core';
import { Router , RouterLink} from '@angular/router';
import { CartserviceService } from '../services/CartService/cartservice.service';
import { CookieServiceService } from '../services/CookieService/cookie-service.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public loggedIn: boolean = false;
  totalCartItems: number = 0;

  constructor(private router: Router , private CartSvc: CartserviceService, private cookieSvc: CookieServiceService){}

  navigateToSignIn(){
    this.router.navigate(['/signin']);
  }

  ngOnInit(){
    this.loggedIn = this.cookieSvc.getCookie('JWT') ? true : false;
    // this.CartSvc.getCart().subscribe((cartItems) => {
    //   this.totalCartItems = cartItems.length;
    // });
  }

  logout(){
    this.cookieSvc.deleteCookie('JWT');
    this.loggedIn = false;
    this.router.navigate(['/']);
  }

}
