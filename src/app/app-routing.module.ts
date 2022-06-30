import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
 
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  { 
    path: 'category-list', 
    component: CategoryListComponent 
  },
  { 
    path: 'product-list', 
    component: ProductListComponent 
  },
  { 
    path: 'product-list/:categoryId', 
    component: ProductListComponent 
  },
   {
path: 'cart',
      component: CartComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
