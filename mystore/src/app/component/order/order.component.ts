import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import Order from 'src/app/model/Order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {
  orderDetails!: Order;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.orderDetails = this.cartService.getOrder();
  }

}
