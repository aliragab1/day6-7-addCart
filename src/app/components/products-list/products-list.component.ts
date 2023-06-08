import { Component } from '@angular/core';

import { Product } from '../interface/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  productList!: Product[];
  constructor(private ProductsService: ProductsService) {}
  ngOnInit() {
    this.ProductsService.getProducts().subscribe(
      (res: any) => (this.productList = res.products)
    );
    // this.productList.forEach((a: any) => {
    //   Object.assign(a, { quantity: 1, total: a.price });
    // });
    // this.productList.forEach((a: any) => {
    //   Object.assign(a, { quantity: 1, total: a.price });
    // });
  }
}
