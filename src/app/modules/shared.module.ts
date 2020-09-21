import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterProductsPipe } from '../pipes';

@NgModule({
  declarations: [FilterProductsPipe],
  imports: [CommonModule],
  exports: [CommonModule, FilterProductsPipe],
  providers: [],
})
export class SharedModule {}
