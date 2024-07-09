import { Injectable, EventEmitter } from '@angular/core';

import Cart from '../model/Cart';
import Order from '../model/Order';
import Product from '../model/Product';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  change: EventEmitter<Order> = new EventEmitter();
  cart!: Cart;
  order!: Order;

  constructor() {
    this.emptyCart();
  }

  private emptyCart(): void {
    this.cart = { items: null, cartPriceTotal: 0 };
  }

  getCart() {
    return this.cart;
  }

  setOrder(fullname: string, address: string, creditCartNumber: string): void {
    this.order = {
      cart: this.cart,
      fullName: fullname,
      address: address,
      creditCardNumber: creditCartNumber
    };
  }

  getOrder(): Order {
    const placedOrder = this.order;
    this.setOrder('', '', '');
    this.emptyCart();
    return placedOrder;
  }

}