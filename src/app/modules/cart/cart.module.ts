import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CART_ROUTES } from 'src/app/routes';
import { SharedModule } from '../shared.module';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartComponent } from './cart.component';

@NgModule({
  declarations: [CartComponent, CartListComponent],
  imports: [SharedModule, RouterModule.forChild(CART_ROUTES)],
  exports: [],
  providers: [],
})
export class CartModule {}
