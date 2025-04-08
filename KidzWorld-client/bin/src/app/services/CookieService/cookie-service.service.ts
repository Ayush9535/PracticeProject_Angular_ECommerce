import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieServiceService {

  constructor() { }

  setCookie(name: string, value: string, days: number) {

    sessionStorage.setItem(name, value);

    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/; secure; SameSite=Strict`;
  }

  getCookie(name: string): string | null {

    return sessionStorage.getItem(name);

    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('JWT') !== null;
    return this.getCookie('JWT') !== null;
  }

  logout(): void {
    this.deleteCookie('JWT');
    console.log('User logged out');
  }

  deleteCookie(name: string) {
    sessionStorage.removeItem(name);
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }

}
