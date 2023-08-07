import { Component } from '@angular/core';

@Component({
  selector: 'la-root',
  template: '<router-outlet></router-outlet>',
  styles: [':host{display: block; height: 100%}']
})
export class AppComponent {
}
