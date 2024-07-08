import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent {

  private routeParams!: Subscription;
  private productData!: Subscription;
  id!: number;
  product!: Product;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.product = {
      id: 1,
      name: '',
      description: '',
      price: 1,
      url: '',
    };
  }


  ngOnInit(): void {
    this.routeParams = this.route.params.subscribe((params) => {
      this.id = parseInt(params['id']);
    });
    this.productData = this.productService.getProducts().subscribe((data) => {
      this.product = data.filter((product) => (product.id === this.id))[0];
    });
  }

  ngOnDestroy(): void {
    this.routeParams.unsubscribe;
    this.productData.unsubscribe;
  }

}



