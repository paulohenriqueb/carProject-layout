import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CatalogComponent } from './pages/catalog/catalog.component'


const routes: Routes = [
  {path:'catalogo', component:CatalogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
