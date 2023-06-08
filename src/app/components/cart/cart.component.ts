import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  public products: any = [];
  // public grandTotal!: number;
  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      // this.grandTotal = this.cartService.getTotalPrice();
    });
  }
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  updateQuantity(item: any): void {
    item.quantity = Math.max(item.quantity, 1);
    this.cartService.updateCartItemQuantity(item.id, item.quantity);
  }

  calculateTotalPrice(): number {
    return this.cartService.calculateTotalPrice();
  }
}
