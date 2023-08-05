import { Component, Input } from '@angular/core';

@Component({
  selector: 'AppTAR',
  templateUrl: './tar.component.html',
  styleUrls: ['./tar.component.css'],
})
export class TarComponent {
  @Input() datas: any = [];
}
