import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import Order from 'src/app/model/Order';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})

export class OrderConfirmComponent implements OnInit {
  orderDetails!: Order;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    //this.orderDetails = this.cartService.getOrder();
  }

}
