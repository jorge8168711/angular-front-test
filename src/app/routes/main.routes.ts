import { Routes } from '@angular/router';
import { ErrorComponent } from '../components';
import { MainComponent } from '../modules/main/main.component';
import { CartComponent } from '../modules/products';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainComponent,
    children: [
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
    ],
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '**',
    redirectTo: 'error',
  },
];
