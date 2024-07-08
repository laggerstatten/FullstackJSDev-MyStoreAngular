import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent implements OnInit {
  @Input() product: Product;

  quantity: number = 0;


  constructor(private cartService: CartService, ) {
    this.product = {
      id: 1,
      name: '',
      description: '',
      price: 1,
      url: '',
    };
  }

  handleItemAdded(): void {
    this.cartService.addProductToCart(this.product, this.quantity);
  }

  ngOnInit(): void {
  }

}
