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

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.service.getProducts().then((res) => {
      this.loading = false;
      return (this.products = res);
    });
  }

  public trackByFn(index: number, item: Product): number {
    return item.id;
  }
}
