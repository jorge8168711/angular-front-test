import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  productsQty = 0;
  subscription: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.subscription = this.cartService.cartItemsChanged.subscribe(
      (products) => {
        if (products.length === 0) {
          this.productsQty = 0;
        }

        if (products.length > 0) {
          this.productsQty = products.reduce(
            (accum, currentVal) => (accum += currentVal.quantity),
            0
          );
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
