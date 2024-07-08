import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartItemComponent } from './component/cart-item/cart-item.component';
import { OrderComponent } from './component/order/order.component';
import { CartComponent } from './component/cart/cart.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { ProductItemDetailComponent } from './component/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CartItemComponent,
    OrderComponent,
    ProductItemComponent,
    ProductItemDetailComponent,
    ProductListComponent,
    NavBarComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
