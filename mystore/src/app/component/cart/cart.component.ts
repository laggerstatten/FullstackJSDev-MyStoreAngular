import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Cart from 'src/app/model/Cart';
import CartItems from 'src/app/model/Cart-Items';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cart!: Cart;
  cartItemList!: CartItems[];

  constructor(
    private router: Router,
    private cartService: CartService
  ) { }

  updateCartItemList(): void {
    if (this.cart.items !== null) {
      this.cartItemList = Object
        .keys(this.cart.items)
        .map((key) => (this.cart.items![parseInt(key)]));
    }
  }

  handleQuantityChanged(cartItem: CartItems): void {
    this.cart = this.cartService.updateProductQuantity(cartItem.product.id, cartItem.quantity);
    this.updateCartItemList();
  }

  handleProductRemovedFromCart(cartItem: CartItems): void {
    this.cart = this.cartService.removeProductFromCart(cartItem.product.id);
    this.updateCartItemList();
  }

  getTotal(): number {
    return this.cartItemList.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  checkout(): void {
    console.log('Proceeding to checkout...');
    // Implement checkout logic here
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.updateCartItemList();
  }

}
