import { Routes } from '@angular/router';
import {
  ProductDetailComponent,
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
