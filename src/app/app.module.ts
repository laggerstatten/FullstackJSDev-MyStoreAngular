import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { PostsComponent } from './component/posts/posts.component';
import { PostItemComponent } from './component/post-item/post-item.component';
import { CreatePostComponent } from './component/create-post/create-post.component';
import { HistoryComponent } from './component/history/history.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';



//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostItemComponent,
    HistoryComponent,
    NavBarComponent,
    CreatePostComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductDetailComponent
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
