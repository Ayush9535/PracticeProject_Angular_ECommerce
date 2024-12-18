import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { enviornment } from '../environments/environments';
import { provideHotToastConfig } from '@ngneat/hot-toast';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(provideFirebaseApp(()=>initializeApp(enviornment.firebaseConfig))),
    importProvidersFrom(provideAuth(()=>getAuth())),
    provideHotToastConfig()
  ],
};
