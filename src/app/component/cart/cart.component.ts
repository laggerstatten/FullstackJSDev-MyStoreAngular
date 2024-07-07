import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import CartItems from 'src/app/model/cart-items';
import Product from 'src/app/model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  {
  @Input() product!: Product;
  @Input() quantity!: number;
  @Output() quantityEmitter: EventEmitter<CartItems>= new EventEmitter();


  constructor(private cartService: CartService) { }

  handleQuantityChanged(quantity:number): void{
this.quantityEmitter.emit({
  product: this.product,
  quantity: quantity
});
  }

}
