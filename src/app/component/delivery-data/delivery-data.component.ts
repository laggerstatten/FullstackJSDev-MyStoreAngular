import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Cart from 'src/app/model/cart';
import CartItems from 'src/app/model/cart-items';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-delivery-data',
  templateUrl: './delivery-data.component.html',
  styleUrls: ['./delivery-data.component.css']
})
export class DeliveryDataComponent implements OnInit {
  cart!: Cart;
  fullname: string;
  address: string;
  creditCardNumber: string;
  cartItemList!: CartItems[];

  constructor(private router: Router, private cartService: CartService) { }

  updateItemList(): void{
    if(this.cart.items !== null){
      this.cartItemList= Object
      .keys(this.cart.items)
      .map((key)=>(this.cart.items![parseInt(key)]));
    }
  }
  sendOrder(): void{
    this.cartService.setOrder(this.fullname, this.address, this.creditCardNumber);
    this.router.navigate(['/order']);

  }

  handleQuantityChanged(cartItem : CartItems): void{
    this.cart=this.cartService.updateQuantity(cartItem.product.id, cartItem.quantity);
    this.updateItemList();


  }

  ngOnInit(): void {
    this.cart=this.cartService.getCart();
    this.updateItemList();
  }

}
