import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-dynamic-component',
  template: `<h2>I'm dynamically attached {{ data }}</h2>`
})
export class DynamicComponent {
    @Input() data: String = 'Component';
}
