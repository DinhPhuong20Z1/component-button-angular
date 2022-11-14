import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-component-button',
  template: `
  <button *ngIf="type === 'primary'" mat-raised-button color="primary">
  {{label}}
</button>
<button *ngIf="type === 'secondary'" mat-stroked-button color="primary">
  {{label}}
</button>
`,
  styles: [
  ]
})
export class ComponentButtonComponent implements OnInit {
  @Input() label = 'Button';
  @Input() type: 'primary' | 'secondary' = 'primary';
  constructor() { }

  ngOnInit(): void {
  }

}
