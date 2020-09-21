import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models';
import { ProductsService } from 'src/app/services';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  loading = false;
  filter = '';
  filters = ['men clothing', 'jewelery', 'electronics', 'women clothing'];

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.service.getProducts().then((res) => {
      this.loading = false;
      return (this.products = res);
    });
  }

  trackByFn(index: number, item: Product): number {
    return item.id;
  }

  setFilter(val: string): void {
    this.filter = val;
  }
}
