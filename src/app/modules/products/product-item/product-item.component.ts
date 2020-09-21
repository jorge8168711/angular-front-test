import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from 'src/app/models';
import { CartService } from 'src/app/services';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent {
  @Input() data: Product;

  constructor(private cartService: CartService) {}

  addToCart(product: Product): void {
    this.cartService.addProduct({ ...product, quantity: 1 });
  }
}
