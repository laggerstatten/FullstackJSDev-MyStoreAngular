/**
  import { Component, OnInit } from '@angular/core';
  
  @Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
  })
  export class CartComponent implements OnInit {
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
  }
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  ngOnInit(): void {
    // Replace with actual cart retrieval logic
    this.cartItems = [
      {
        product: {
          id: 1,
          name: 'Fancy Product',
          url: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
          price: 40.00,
          description: 'This is a description of the Fancy Product.'
        },
        quantity: 2
      },
      {
        product: {
          id: 2,
          name: 'Special Item',
          url: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
          price: 18.00,
          description: 'This is a description of the Special Item.'
        },
        quantity: 1
      }
    ];
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  removeFromCart(itemToRemove: any): void {
    this.cartItems = this.cartItems.filter(item => item !== itemToRemove);
  }

  checkout(): void {
    console.log('Proceeding to checkout...');
    // Implement checkout logic here
  }
}


