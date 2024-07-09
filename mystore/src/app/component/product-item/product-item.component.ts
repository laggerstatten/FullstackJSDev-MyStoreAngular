import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import Product from 'src/app/model/Product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent {

  @Input() product!: Product;

  quantity: number = 0;

  constructor(private cartService: CartService) { }

  handleProductAddedToCart(): void {
    this.cartService.addProductToCart(this.product, this.quantity);
    this.quantity = 0;
  }

}