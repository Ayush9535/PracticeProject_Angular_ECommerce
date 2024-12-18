import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router , RouterLink} from '@angular/router';
import { AuthService } from '../services/AuthService/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  errors: any = {
    username: false,
    password: false,
    email: false
  }

  constructor(private router: Router , private authService: AuthService){}

  onSubmit() {
    if(this.username.length < 1) {
      this.errors.username = true;
      return;
    }
    else if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,9}$/.test(this.email) === false) {
      this.errors.email = true;
      return;
    }
    else if (this.password.length < 1) {
      this.errors.password = true;
      return;
    }

    this.authService.signup(this.username , this.email, this.password);
  }
}
