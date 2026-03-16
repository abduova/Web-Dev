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
    new Product(1, 'Product 1', 'Description of Product 1', 19.99, 4.5, 'https://via.placeholder.com/150', ['https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-15-white/iphone-15-white-3.jpg/iphone-15-white-3.jpg/veonmarket%3Alarge','https://avatars.mds.yandex.net/i?id=528099324959c70dd99fafab3850333029060a59-10414202-images-thumbs&n=13'], 'https://example.com/product1'),
    new Product(2, 'Product 2', 'Description of Product 2', 29.99, 4.0, 'https://via.placeholder.com/150', ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHY7PjSLNaIq8g1cmQY7NizdHirDX3dQY4Qw&s','https://avatars.mds.yandex.net/i?id=528099324959c70dd99fafab3850333029060a59-10414202-images-thumbs&n=13'], 'https://example.com/product2'),
    new Product(3, 'Product 3', 'Description of Product 3', 39.99, 4.8, 'https://via.placeholder.com/150', ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfodCEEe-skU6BcHS-PVJuGVsx0nOYud_yw&s','https://avatars.mds.yandex.net/i?id=528099324959c70dd99fafab3850333029060a59-10414202-images-thumbs&n=13'], 'https://example.com/product3'),
    new Product(4, 'Product 4', 'Description of Product 4', 49.99, 4.2, 'https://via.placeholder.com/150', ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzv1IxpstBl84prWxRmXXs_os1q-Z7LJPcWA&s','https://avatars.mds.yandex.net/i?id=528099324959c70dd99fafab3850333029060a59-10414202-images-thumbs&n=13'], 'https://example.com/product4'),
    new Product(5, 'Product 5', 'Description of Product 5', 59.99, 4.7, 'https://via.placeholder.com/150', ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS8FVmLB2r8QBR5QCC3w_Gsl6EZhObKQ0UbA&s','https://avatars.mds.yandex.net/i?id=528099324959c70dd99fafab3850333029060a59-10414202-images-thumbs&n=13'], 'https://example.com/product5'),
    new Product(6, 'Product 6', 'Description of Product 6', 69.99, 4.3, 'https://via.placeholder.com/150', ['https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-12/iphone-12-productred-1.jpg','https://avatars.mds.yandex.net/i?id=528099324959c70dd99fafab3850333029060a59-10414202-images-thumbs&n=13'], 'https://example.com/product6'),
    new Product(7, 'Product 7', 'валмтпоа', 79.99, 4.6, 'https://via.placeholder.com/150', ['https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-15-white/iphone-15-white-3.jpg/iphone-15-white-3.jpg/veonmarket%3Alarge','https://avatars.mds.yandex.net/i?id=528099324959c70dd99fafab3850333029060a59-10414202-images-thumbs&n=13'], 'https://example.com/product1'),
];

}
