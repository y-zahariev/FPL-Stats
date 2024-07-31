import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FplStatsComponent } from './app/components/fpl-stats/fpl-stats.component';
import { provideHttpClient } from '@angular/common/http';

// Define your routes
const routes: Routes = [
  { path: '', component: FplStatsComponent },
  // Add other routes here
];

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), importProvidersFrom(RouterModule.forRoot(routes)) ]
}).catch(err => console.error(err));
