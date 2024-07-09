import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Order from 'src/app/model/Order';
import Cart from 'src/app/model/Cart';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})

export class PurchaseComponent implements OnInit {
  cart!: Cart;
  fullname: string;
  address: string;
  creditCardNumber: string;

  constructor(
    private router: Router,
    private orderService: OrderService
  ) { }

  sendOrder(): void {
    this.orderService.setOrder(this.fullname, this.address, this.creditCardNumber);
    this.router.navigate(['/order']);
  }

  ngOnInit(): void {
    this.cart = this.orderService.getCart();
  }

}
