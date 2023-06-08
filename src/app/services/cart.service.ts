import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../components/interface/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  constructor() {}
  getProducts() {
    return this.productList.asObservable();
  }
  setProducts(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addToCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);

    // this.getTotalPrice();
    console.log(this.cartItemList);
  }
  // getTotalPrice(): number {
  //   let grandTotal = 0;
  //   this.cartItemList.map((a: any) => {
  //     grandTotal += a.total;
  //   });
  //   return grandTotal;
  // }
  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id == a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

  updateCartItemQuantity(productId: number, quantity: number): void {
    const item = this.cartItemList.find((item: any) => item.id === productId);
    if (item) {
      item.quantity = quantity;
      this.productList.next(this.cartItemList);
    }
  }

  calculateTotalPrice(): number {
    return this.cartItemList.reduce((total: any, item: any) => {
      return total + item.price * item.quantity;
    }, 0);
  }
}
