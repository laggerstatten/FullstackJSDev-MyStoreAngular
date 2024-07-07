import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationComponent } from './component/confirmation/confirmation.component';
import { ProductItemDetailComponent } from './component/product-item-detail/product-item-detail.component';
import { DeliveryDataComponent } from './component/delivery-data/delivery-data.component';
import { ProductListComponent } from './component/product-list/product-list.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'cart', component: DeliveryDataComponent},
  {path: 'products/:id', component: ProductItemDetailComponent },
  {path: 'order', component: ConfirmationComponent},
  {path: '**', redirectTo: '/' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
