import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SharedModule } from '../shared.module';
import { RouterModule } from '@angular/router';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductsFiltersComponent } from './products-filters/products-filters.component';
import { ProductSkeletonComponent } from './product-skeleton/product-skeleton.component';
import { PRODUCTS_ROUTES } from 'src/app/routes';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ProductsListComponent,
    ProductItemComponent,
    ProductsFiltersComponent,
    ProductSkeletonComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(PRODUCTS_ROUTES)],
  exports: [],
  providers: [],
})
export class ProductsModule {}
