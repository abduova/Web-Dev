import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { Product } from '../product-item/product.model';
import { ProductItem } from '../product-item/product-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ProductItem, CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductList {

   @Input() products: Product[] = [];

}
