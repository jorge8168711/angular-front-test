import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models';
import { CartService } from 'src/app/services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  products: Product[] = [];

  constructor(private service: CartService) {}

  ngOnInit(): void {
    this.products = this.service.products;
  }
}
