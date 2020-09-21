import { Component } from '@angular/core';
import { Product } from 'src/app/models';
import { CartService } from 'src/app/services';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
})
export class CartListComponent {
  products: Product[] = this.service.products;

  constructor(private service: CartService) {}

  getTotalPrice(prods: Product[]): number {
    return prods.reduce(
      (accum, curr) => (accum += curr.price * curr.quantity),
      0
    );
  }

  delete(index): void {
    this.service.deleteProduct(index);
  }

  reduceProductQty(index): void {
    this.service.reduceQty(index);
  }

  increaseProductQty(index): void {
    this.service.increaseQty(index);
  }
}
