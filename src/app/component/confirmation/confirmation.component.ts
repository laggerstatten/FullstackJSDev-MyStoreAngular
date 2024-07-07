import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import Order from 'src/app/model/order';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  orderDetails!: Order;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.orderDetails=this.cartService.getOrder();
  }

}
