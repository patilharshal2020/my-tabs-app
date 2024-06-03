import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // Add more routes here if needed
];

bootstrapApplication(AppComponent, {
  providers: [...appConfig.providers, provideRouter(routes)]
}).catch((err) => console.error(err));
