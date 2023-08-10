import { InjectionToken, Type } from '@angular/core';
import { LoadChildrenCallback } from '@angular/router';

// Modules containing custom elements must be set up as lazy-loaded routes (loadChildren)
// that contains custom elements.
export const ELEMENT_MODULE_LOAD_CALLBACKS_AS_ROUTES = [
  {
    selector: 'lc-editor',
    loadChildren: () => import('../views/editor/editor.module').then(m => m.EditorModule)
  }
];

/**
 * Interface expected to be implemented by all modules that declare a component that can be used as
 * a custom element.
 */
export interface WithWebComponent {
  webComponent: Type<any>;
}

/** Injection token to provide the element path modules. */
export const ELEMENT_MODULE_LOAD_CALLBACKS_TOKEN = new InjectionToken<Map<string, LoadChildrenCallback>>(
  'lc/elements-map'
);

/** Map of possible custom element selectors to their lazy-loadable module paths. */
export const ELEMENT_MODULE_LOAD_CALLBACKS = new Map<string, LoadChildrenCallback>();
ELEMENT_MODULE_LOAD_CALLBACKS_AS_ROUTES.forEach(route => {
  ELEMENT_MODULE_LOAD_CALLBACKS.set(route.selector, route.loadChildren);
});
