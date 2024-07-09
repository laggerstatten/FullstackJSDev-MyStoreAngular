import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductItemDetailComponent } from './component/product-item-detail/product-item-detail.component';
import { CartComponent } from './component/cart/cart.component';
import { PurchaseComponent } from './component/purchase/purchase.component';
import { OrderConfirmComponent } from './component/order-confirm/order-confirm.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:id', component: ProductItemDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'purchase', component: PurchaseComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
