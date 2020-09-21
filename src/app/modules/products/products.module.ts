import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SharedModule } from '../shared.module';
import { RouterModule } from '@angular/router';
import { PRODUCTS_ROUTES } from 'src/app/routes/products.routes';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductsComponent,
    ProductsListComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(PRODUCTS_ROUTES)],
  exports: [],
  providers: [],
})
export class ProductsModule {}