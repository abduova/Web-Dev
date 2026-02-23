import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15',
      description: 'Latest Apple smartphone.',
      price: 500000,
      rating: 4.8,
      image: 'https://via.placeholder.com/200',
      images: [
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200'
      ],
      link: 'https://kaspi.kz'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      description: 'Flagship Android smartphone.',
      price: 450000,
      rating: 4.7,
      image: 'https://via.placeholder.com/200',
      images: [
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200'
      ],
      link: 'https://kaspi.kz'
    }

    // Добавь ещё минимум 8 товаров
  ];

}