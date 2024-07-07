import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import Product from 'src/app/model/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
 
  @Input() product!:Product;

  quantity: number=0;
  
    constructor(private cartService: CartService) { }
    handleItemAdded(): void{
      this.cartService.addToCart(this.product,this.quantity);
      alert(`We have put  ${this.quantity} piece${(this.quantity===1)? '' : 's'} of ${this.product.name} in your cart shopping.`);
      this.quantity=0;
    }

}
