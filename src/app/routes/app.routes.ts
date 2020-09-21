import { Routes } from '@angular/router';
import { ErrorComponent } from '../components';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../modules/main/main.module').then(
        (m) => m.MainModule
      ),
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
