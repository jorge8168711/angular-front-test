import { Routes } from '@angular/router';
import {
  CartComponent,
  ProductDetailComponent,
  ProductsComponent,
  ProductsListComponent,
} from '../modules/products';

export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    component: ProductsListComponent,
  },
  {
    path: ':id',
    component: ProductDetailComponent,
  },
];
