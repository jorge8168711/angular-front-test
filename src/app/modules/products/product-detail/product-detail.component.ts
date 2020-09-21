import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models';
import { CartService, ProductsService } from 'src/app/services';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  data: Product;
  loading = false;
  private subscription: Subscription;

  constructor(
    private service: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.subscription = this.route.params.subscribe((p) => {
      this.service.getProductById(p.id).then((res) => {
        this.data = res;
        this.loading = false;
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addToCart(product: Product): void {
    this.cartService.addProduct({  ...product, quantity: 1 });
  }
}
