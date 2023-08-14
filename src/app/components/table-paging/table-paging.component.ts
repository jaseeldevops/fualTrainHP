import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-paging',
  templateUrl: './table-paging.component.html',
  styleUrls: ['./table-paging.component.css'],
})
export class TablePagingComponent {
  @Input() page: any = 1;
  @Input() count: any = 1;
  @Input() total: any = 1;
  @Input() onChange: any;

  counter: any = [];

  totalCOunt: any = 10;

  ngOnInit() {
    this.setPaging();
  }

  onClickAny = (k: any) => {
    if (typeof k === 'string') return;
    this.page = k;
    this.onChange(k, this.count);
    this.setPaging();
  };

  onClickPrev = () => {
    if (this.page - 1 > 0) {
      this.page -= 1;
      this.setPaging();
      this.onChange(this.page, this.count);
    }
  };
  onClickNext = () => {
    const tl = Math.floor(this.total / this.count);
    if (this.page + (this.total % this.count > 0 ? 0 : 1) <= tl) {
      this.page += 1;
      this.setPaging();
      this.onChange(this.page, this.count);
    }
  };

  onSubmitTotal = () => {
    if (this.totalCOunt > 0) {
      this.count = this.totalCOunt;
      this.page = 1;
      this.setPaging();
      this.onChange(this.page, this.count);
    }
  };

  setPaging = () => {
    this.counter = [];
    this.counter.push(1);
    const tl = Math.floor(this.total / this.count);

    if (this.page - 3 > 1) this.counter.push('..');
    if (this.page - 2 > 1) this.counter.push(this.page - 2);
    if (this.page - 1 > 1) this.counter.push(this.page - 1);
    if (this.page > 1) this.counter.push(this.page);
    if (this.page < tl) this.counter.push(this.page + 1);
    if (this.page + 1 < tl) this.counter.push(this.page + 2);
    if (this.page + 2 < tl) this.counter.push('..');

    if (this.total % this.count > 0) {
      if (tl + 1 !== this.page) this.counter.push(tl + 1);
    } else {
      if (tl - 2 > this.page) if (tl !== this.page) this.counter.push(tl);
    }
  };
}
