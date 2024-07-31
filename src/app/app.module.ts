// imports
import { BrowserModule } from '@angular/platform-browser';


import { NgModule } from '@angular/core';

import { FplStatsComponent } from './components/fpl-stats/fpl-stats.component';
import { provideHttpClient } from '@angular/common/http';

// @NgModule decorator with its metadata
@NgModule({
  declarations: [],
  imports: [BrowserModule, FplStatsComponent ],
  providers: [provideHttpClient()],
  bootstrap: []
})
export class AppModule {}