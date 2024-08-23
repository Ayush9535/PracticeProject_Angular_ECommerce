import { Component} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  email: string;
  password: string;
  errors: any = {
    email: false,
    password: false
  };
  

  constructor() {
    this.email = '';
    this.password = '';
  }

  onSubmit() {
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,9}$/.test(this.email) === false) {
      this.errors.email = true;
      return;
    }
    else if (this.password.length < 1) {
      this.errors.password = true;
      return;
    }

    console.log('Email:', this.email , 'Password:' ,this.password);
    this.errors.email = false;

  }
}
