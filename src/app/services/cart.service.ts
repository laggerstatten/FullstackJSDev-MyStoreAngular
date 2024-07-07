import { Injectable, EventEmitter  } from '@angular/core';



import Cart from '../model/cart';
import Order from '../model/order';
import Product from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  change: EventEmitter<Cart>=new EventEmitter();
  cart!: Cart;
  order!: Order;

  

  constructor() { 
    this.emptyCart();
  }
  private emptyCart(): void{
    this.cart={items: null, cartValue:0 };
  }
  //return a cart
getCart(){
  return this.cart;
}
//add a product to a cart

addToCart( product: Product, quantity: number):void {
if (this.cart.items=== null){
  this.cart.items={};
}

if(this.cart.items[product.id]===undefined){
  this.cart.items[product.id]={
    product: product,
    quantity: quantity
  };
}
else{
  this.cart.items[product.id].quantity +=quantity;
}

this.cart.cartValue=0;
for(let index in this.cart.items){
  const item=this.cart.items[index];
  this.cart.cartValue+=item.product.price * item.quantity;
}

}


updateQuantity(productId: number, quantity: number): Cart{
  
  if(this.cart.items[productId]!==undefined && this.cart.items !== null){

    if(quantity>0){
      const item=this.cart.items[productId];
  this.cart.cartValue+=item.product.price * (quantity-item.quantity);
  item.quantity=quantity;
    }
    else{
      alert(`we have remove the last product ${this.cart.items[productId].product.name} of your cart`);
      delete this.cart.items[productId];
    }

}
return this.cart;
}

setOrder(fullname: string, address: string, creditCartNumber: string):void {
this.order={
  cart:this.cart,
  fullName:fullname,
  address:address,
  creditCardNumber:creditCartNumber
};
}
getOrder():Order{
  const placedOrder=this.order;
  this.setOrder('','','');
  this.emptyCart();
  return placedOrder;
}



}
