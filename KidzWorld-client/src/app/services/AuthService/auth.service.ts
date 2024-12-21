import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieServiceService } from '../CookieService/cookie-service.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl + '/auth'; 

  constructor(private http: HttpClient, private cookieService: CookieServiceService, private toastService: HotToastService, private router: Router) { }

  signIn(email: string, password: string) {
    return this.http.post<any>(this.apiUrl + "/login", { email, password }, { withCredentials: true });
  }

  login(email: string, password: string) {
    const loadingToast = this.toastService.loading('Logging in..!')
    this.signIn(email, password).subscribe(
      (response) => {
        console.log('Login response:', response);
        loadingToast.close();
        this.toastService.success('Login Successful..!', {
          dismissible: true,
          duration: 2000
        })
        this.cookieService.setCookie('JWT', response.token, 1);
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 2000); 
      },
      (error) => {
        loadingToast.close();
        this.toastService.error("Login Failed..!", {
          dismissible: true,
          duration: 2000
        })
        console.error('Login failed', error);
      }
    );
  }

  signUp(username: string , email: string, password: string) {
    return this.http.post<any>(this.apiUrl + "/register", { username, email, password });
  }

  signup(username: string , email: string, password: string) {
    const loadingToast = this.toastService.loading('Logging in..!')
    this.signUp(username, email, password).subscribe(
      (response) => {
        console.log('SingUp response:', response);
        loadingToast.close();
        this.toastService.success('Account Created Successfully..!', {
          dismissible: true,
          duration: 1000
        })
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1000); 
      },
      (error) => {
        loadingToast.close();
        this.toastService.error("SignUp Failed..!" , {
          dismissible: true,
          duration: 2000
        })
        console.error('Login failed', error);
      }
    );
  }



  
}
