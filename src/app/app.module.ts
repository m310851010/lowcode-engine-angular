import { APP_ID, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { createCustomElement } from '@angular/elements';
import { CustomElementsModule } from './custom-elements/custom-elements.module';
import { LazyWebComponent } from './custom-elements/lazy-web.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, CustomElementsModule],
  providers: [{ provide: APP_ID, useFactory: () => 'lc-angular' }],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}
  ngDoBootstrap(appRef: ApplicationRef): void {
    const el = createCustomElement(LazyWebComponent, { injector: this.injector });
    customElements.define('wc-loader', el);
  }
}
