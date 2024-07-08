import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;

  constructor() {
    this.product = {
      id: 1,
      name: '',
      description: '',
      price: 1,
      url: '',
    }
  }

  ngOnInit(): void {
  }

}
