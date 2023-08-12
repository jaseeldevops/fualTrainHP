import { Component, Input } from '@angular/core';

@Component({
  selector: 'Indent-status',
  templateUrl: './indent-status.component.html',
  styleUrls: ['./indent-status.component.css'],
})
export class IndentStatusComponent {
  @Input() datas: any = {};
}
