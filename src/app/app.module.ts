import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IncludesModule } from './pages/includes/includes.module';
import { CatalogComponent } from './pages/catalog/catalog.component';


@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IncludesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
