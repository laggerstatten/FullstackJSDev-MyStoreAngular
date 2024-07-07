import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import Product from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private dataSource='./assets/data.json';

  constructor(private http : HttpClient) { }
  getListProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(this.dataSource);
  }
}
