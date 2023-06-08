import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import data from 'src/assets/products.json';
// import { Product } from '../interface/product';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  // products: Product[] = data;
  // products!: Product[];

  productDetails: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private ProductsService: ProductsService
  ) {}
  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];

    this.ProductsService.getProductDetails(id).subscribe(
      (res) => (this.productDetails = res)
    );
  }
}
