import { Component, Input } from '@angular/core';

@Component({
  selector: 'InterlockParameters',
  templateUrl: './interlock.component.html',
  styleUrls: ['./interlock.component.css'],
})
export class InterlockComponent {
  @Input() datas: any = [];
}
