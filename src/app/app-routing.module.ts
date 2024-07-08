import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './component/posts/posts.component';
import { HistoryComponent } from './component/history/history.component';
import { ProductListComponent } from './component/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'products', component: ProductListComponent },
  { path: '**', redirectTo: '/' },
  { path: 'history', component: HistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
