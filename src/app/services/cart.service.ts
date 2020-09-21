import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models';

@Injectable({ providedIn: 'root' })
export class CartService {
  cartItemsChanged = new Subject<Product[]>();
  // tslint:disable-next-line: variable-name
  private _items: Product[] = [];
  constructor() {}

  get products(): Product[] {
    return this._items;
  }

  addProduct(product: Product): void {
    const exist = this._items.findIndex((item) => item.id === product.id);
    if (exist !== -1) {
      this._items[exist].quantity += 1;
    } else {
      this._items.push(product);
    }

    this.cartItemsChanged.next(this._items);
  }

  deleteProduct(index: number): void {
    this._items.splice(index, 1);
    this.cartItemsChanged.next(this._items);
  }

  reduceQty(index: number): void {
    const item = this._items[index];
    if (item.quantity === 0) {
      this.deleteProduct(index);
      this.cartItemsChanged.next(this._items);
    }

    if (item.quantity > 0) {
      item.quantity -= 1;
      this.cartItemsChanged.next(this._items);
    }
  }

  increaseQty(index: number): void {
    this._items[index].quantity += 1;
    this.cartItemsChanged.next(this._items);
  }
}
