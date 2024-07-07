// src/app/product-list/product-list.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Product 1', price: 100, description: 'Description of Product 1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 150, description: 'Description of Product 2', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 200, description: 'Description of Product 3', imageUrl: 'https://via.placeholder.com/150' },
  ];
}
