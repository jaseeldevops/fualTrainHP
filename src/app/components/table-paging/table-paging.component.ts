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

  ngOnInit() {
    this.setPaging(1);
  }

  onClickAny = (k: any) => {
    this.page = k;
    this.onChange(k);
  };

  setPaging = (k: number) => {
    this.counter = [];
    const tl = this.total / this.count;
    for (let i = 1; i <= tl && i <= 10; i++) this.counter.push(i);
  };
}
