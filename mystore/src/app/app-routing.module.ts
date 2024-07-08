import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './component/order/order.component';
import { ProductItemDetailComponent } from './component/product-item-detail/product-item-detail.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductListComponent } from './component/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:id', component: ProductItemDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
