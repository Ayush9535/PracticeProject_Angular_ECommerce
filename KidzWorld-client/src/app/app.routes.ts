import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SignupComponent } from './signup/signup.component';
import { MyordersComponent } from './components/myorders/myorders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

export const routes: Routes = [
    {path: "", redirectTo: "/signin", pathMatch: "full"},
    {path: 'signin', component: SignInComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'home', component: HomeComponent},
    {path: 'cart', component: CartComponent},
    {path: "products/:type" , component: AllProductsComponent},
    {path: "checkout" , component: CheckoutComponent},
    {path: "myorders", component: MyordersComponent},
    {path: "order/:orderNumber", component: OrderDetailsComponent}
];
