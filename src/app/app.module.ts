import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { CartComponent } from './cart/cart.component';
import { AuthModule } from './auth/auth.module';
import { provideUserIdleConfig } from 'angular-user-idle';
import { ViewsComponent } from './views/views.component';
import { CheckoutComponent } from './checkout/checkout.component';

// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent,
    CartComponent,
    ViewsComponent,
    CheckoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, AuthModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireAuthModule

  ],
  providers: [
    provideClientHydration(),
    provideUserIdleConfig({idle:60, timeout:40, ping:120})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
