import { Routes } from '@angular/router';
import {
  ProductDetailComponent,
  ProductsComponent,
  ProductsListComponent,
} from '../modules/products';

export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ProductsListComponent,
      },
      {
        path: ':id',
        component: ProductDetailComponent,
      },
    ],
  },
];
