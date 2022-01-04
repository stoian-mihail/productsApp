import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditformComponent } from './components/editform/editform.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:'', component: ProductsComponent },
  {path:'edit/:id', component:EditformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),

  HttpClientModule],

  exports: [RouterModule]
})
export class AppRoutingModule { }
