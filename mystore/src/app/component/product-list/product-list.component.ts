import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import Product from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy {

  private productData!: Subscription;
  products!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productData = this.productService.getListProduct().subscribe((data) => {
      this.products = data;
    });
  }

  ngOnDestroy(): void {
    this.productData.unsubscribe;
  }

}
