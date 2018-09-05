import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-dynamic-component',
  templateUrl: './app.dynamic.component.html',
  styleUrls: ['./app.dynamic.component.css']
})
export class DynamicComponent {
    @Input() data: any;
    constructor() {}
}
