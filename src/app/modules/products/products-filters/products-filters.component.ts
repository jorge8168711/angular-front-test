import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-products-filters',
  templateUrl: './products-filters.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsFiltersComponent {
  currentFilter = '';

  @Input() set filter(val: string) {
    this.currentFilter = val;
  }

  @Input() filters: string[] = [];
  @Output() selectFilter = new EventEmitter();

  constructor() {}

  trackByFn(index: number, item: any): number {
    return item.id;
  }

  filterBy(val: string): void {
    this.selectFilter.emit(val);
  }
}
