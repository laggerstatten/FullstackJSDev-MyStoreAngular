import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import Product from 'src/app/model/Product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})

export class ProductItemDetailComponent {

  private routeParams!: Subscription;
  private productData!: Subscription;
  id!: number;
  product!: Product;
  quantity: number = 0;

  constructor(private cartService: CartService, private productService: ProductService, private route: ActivatedRoute) {
    this.product = {
      id: 0,
      name: 'dummy',
      price: 0,
      url: '',
      description: ''
    };
  }

  handleItemAdded(): void {
    this.cartService.addToCart(this.product, this.quantity);
  }

  ngOnInit(): void {
    this.routeParams = this.route.params.subscribe((params) => {
      this.id = parseInt(params['id']);
    });
    this.productData = this.productService.getListProduct().subscribe((data) => {
      this.product = data.filter((product) => (product.id === this.id))[0];
    });
  }

  ngOnDestroy(): void {
    this.routeParams.unsubscribe;
    this.productData.unsubscribe;
  }

}
