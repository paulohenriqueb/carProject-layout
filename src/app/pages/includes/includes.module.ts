import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncludesRoutingModule } from './includes-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    IncludesRoutingModule,
  ],
  exports:[
    HeaderComponent,
    FiltersComponent,
    FooterComponent
  ]
})
export class IncludesModule { }
