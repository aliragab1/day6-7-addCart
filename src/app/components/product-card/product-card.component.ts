import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../interface/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() productCard!: Product;
  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit() {
    this.productCard['quantity'] = 1;
    this.productCard['total'] = this.productCard.price;
  }

  redirectToDetails() {
    this.router.navigate(['product-details', this.productCard.id]);
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }
}
