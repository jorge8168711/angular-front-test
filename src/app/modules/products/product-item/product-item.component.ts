import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from 'src/app/models';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent {
  @Input() data: Product;
}
