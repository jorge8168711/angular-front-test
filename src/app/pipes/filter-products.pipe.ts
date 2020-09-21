import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models';

@Pipe({ name: 'filterProducts' })
export class FilterProductsPipe implements PipeTransform {
  transform(products: Product[], filter?: string): Product[] {
    return filter
      ? products.filter((product) => product.category === filter)
      : products;
  }
}
