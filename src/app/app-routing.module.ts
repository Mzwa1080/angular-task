import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ViewsComponent } from './views/views.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SuccessfulComponent } from './successful/successful.component';
// 
const routes: Routes = [
  {path:'',component:BooksComponent},
  {path:'cart', component:CartComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'views/:bookId', component:ViewsComponent},
  {path: 'checkout', component:CheckoutComponent},
  {path : 'successful', component:SuccessfulComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
