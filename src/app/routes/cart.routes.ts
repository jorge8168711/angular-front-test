import { Routes } from '@angular/router';
import { CartComponent, CartListComponent } from '../modules/cart';

export const CART_ROUTES: Routes = [
  {
    path: '',
    component: CartComponent,
    children: [
      {
        path: '',
        component: CartListComponent,
      },
    ],
  },
];
