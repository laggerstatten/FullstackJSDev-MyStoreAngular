import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CartItemComponent } from './component/cart-item/cart-item.component';
import { CartComponent } from './component/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductDetailComponent,
    CartItemComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
