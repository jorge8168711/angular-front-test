import { Routes } from '@angular/router';
import { CartComponent } from '../components';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadChildren: () =>
      import('../modules/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];
