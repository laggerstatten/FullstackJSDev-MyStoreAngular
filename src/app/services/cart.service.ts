//import { Injectable, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';


import Cart from '../model/Cart';
//import Order from '../model/order';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //change: EventEmitter<Cart> = new EventEmitter();
  cart!: Cart;
  //order!: Order;

  constructor() {
    this.emptyCart();
  }

  private emptyCart(): void {
    this.cart = { items: null, cartPriceTotal: 0 };
  }

  getCart() {
    return this.cart;
  }

  addProductToCart(product: Product, quantity: number): void {
    if (this.cart.items === null) {
      this.cart.items = {};
    }

    if (this.cart.items[product.id] === undefined) {
      this.cart.items[product.id] = {
        product: product,
        quantity: quantity
      };
    }
    else {
      this.cart.items[product.id].quantity += quantity;
    }

    this.cart.cartPriceTotal = 0;
    for (let index in this.cart.items) {
      const item = this.cart.items[index];
      this.cart.cartPriceTotal += item.product.price * item.quantity;
    }

  }
}