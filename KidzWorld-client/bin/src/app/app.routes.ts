import { Routes, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SignupComponent } from './signup/signup.component';
import { MyordersComponent } from './components/myorders/myorders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

// Function to check if JWT exists in session storage
const isAuthenticated = (): boolean => {
  const token = sessionStorage.getItem('jwt');
  return !!token; // Returns true if token exists, false otherwise
};

// Factory function for route guard
const canActivateRoute: CanActivateFn = () => {
  const router = inject(Router); // Inject Router
  if (isAuthenticated()) {
    return true; // Allow access if authenticated
  } else {
    router.navigate(['/signin']); // Redirect to login if not authenticated
    return false; // Deny access
  }
};

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent, canActivate: [canActivateRoute] }, // Protected
  { path: "products/:type", component: AllProductsComponent },
  { path: "checkout", component: CheckoutComponent, canActivate: [canActivateRoute] }, // Protected
  { path: "myorders", component: MyordersComponent, canActivate: [canActivateRoute] }, // Protected
  { path: "order/:orderNumber", component: OrderDetailsComponent, canActivate: [canActivateRoute] } // Protected
];
