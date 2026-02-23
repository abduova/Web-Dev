import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { Product } from './product-item/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App {
  protected readonly title = signal('online-store-app');

  protected products: Product[] = [
    new Product(1, 'Product 1', 'Description of Product 1', 19.99, 4.5, 'https://via.placeholder.com/150', ['https://ih1.redbubble.net/image.3230103741.0302/flat,750x,075,f-pad,750x1000,f8f8f8.jpg','https://avatars.mds.yandex.net/i?id=528099324959c70dd99fafab3850333029060a59-10414202-images-thumbs&n=13'], 'https://example.com/product1'),
    new Product(2, 'Product 2', 'Description of Product 2', 29.99, 4.0, 'https://via.placeholder.com/150', ['https://ih1.redbubble.net/image.3230103741.0302/flat,750x,075,f-pad,750x1000,f8f8f8.jpg','https://avatars.mds.yandex.net/i?id=528099324959c70dd99fafab3850333029060a59-10414202-images-thumbs&n=13'], 'https://example.com/product2'),
    new Product(3, 'Product 3', 'Description of Product 3', 39.99, 4.8, 'https://via.placeholder.com/150', ['https://ih1.redbubble.net/image.3230103741.0302/flat,750x,075,f-pad,750x1000,f8f8f8.jpg','https://avatars.mds.yandex.net/i?id=528099324959c70dd99fafab3850333029060a59-10414202-images-thumbs&n=13'], 'https://example.com/product3'),
    new Product(4, 'Product 4', 'Description of Product 4', 49.99, 4.2, 'https://via.placeholder.com/150', ['https://ih1.redbubble.net/image.3230103741.0302/flat,750x,075,f-pad,750x1000,f8f8f8.jpg','https://avatars.mds.yandex.net/i?id=528099324959c70dd99fafab3850333029060a59-10414202-images-thumbs&n=13'], 'https://example.com/product4'),
    new Product(5, 'Product 5', 'Description of Product 5', 59.99, 4.7, 'https://via.placeholder.com/150', ['https://ih1.redbubble.net/image.3230103741.0302/flat,750x,075,f-pad,750x1000,f8f8f8.jpg','https://avatars.mds.yandex.net/i?id=528099324959c70dd99fafab3850333029060a59-10414202-images-thumbs&n=13'], 'https://example.com/product5'),
    new Product(6, 'Product 6', 'Description of Product 6', 69.99, 4.3, 'https://via.placeholder.com/150', ['https://ih1.redbubble.net/image.3230103741.0302/flat,750x,075,f-pad,750x1000,f8f8f8.jpg','https://avatars.mds.yandex.net/i?id=528099324959c70dd99fafab3850333029060a59-10414202-images-thumbs&n=13'], 'https://example.com/product6'),
];

}
