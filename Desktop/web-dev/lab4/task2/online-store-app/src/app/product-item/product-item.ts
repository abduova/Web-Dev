import { Component, Input, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Product } from './product.model';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem implements AfterViewInit {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  @Input() product: Product | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    // Ensure DOM is fully updated before initializing Swiper
    this.cdr.detectChanges();
    
    setTimeout(() => {
      if (this.swiperContainer?.nativeElement) {
        new Swiper(this.swiperContainer.nativeElement, {
          loop: true,
          slidesPerView: 1,
          pagination: { 
            el: '.swiper-pagination',
            clickable: true 
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          autoplay: false,
        });
      }
    }, 100);
  }

  shareProduct(): void {
    if (!this.product) return;

    if (navigator.share) {
      navigator.share({
        title: this.product.name,
        text: this.product.description,
        url: this.product.link
      });
    } else {
      navigator.clipboard.writeText(this.product.link);
      alert('Link copied to clipboard');
    }
  }

}
