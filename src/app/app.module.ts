import { APP_ID, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { createCustomElement } from '@angular/elements';
import { CustomElementsModule } from './custom-elements/custom-elements.module';
import { WebComponentLoader } from './custom-elements/web-component-loader.component';
import { ComponentNgElementStrategyFactory } from './custom-elements/component-factory-strategy';

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
    const el = createCustomElement(WebComponentLoader, {
      injector: this.injector,
      strategyFactory: new ComponentNgElementStrategyFactory(WebComponentLoader, this.injector)
    });
    console.log(el);
    customElements.define('wc-loader', el);
  }
}
