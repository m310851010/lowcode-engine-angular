import {
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Injector,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewContainerRef
} from '@angular/core';
import { ElementsLoader } from './elements-loader';
import { ReplaySubject, Subject, takeUntil } from 'rxjs';
import { isFunction, strictEquals } from './utils';
import { AddInputs } from './component-factory-strategy';

/**
 * web component加载器
 * @example
 * ``` ts
 * export class TestModule implements WithWebComponent {
 *   webComponent = TestComponent;
 * }
 * ```
 */
@Component({
  selector: 'web-component-loader',
  template: '<ng-container #container></ng-container>'
})
export class WebComponentLoader implements OnInit, OnDestroy, OnChanges {
  private readonly destroy$ = new Subject<void>();
  readonly element: HTMLElement;
  readonly that: WebComponentLoader;
  @Input() selector!: string;
  @Output() readonly onload = new ReplaySubject<any>();
  private addInputFn!: AddInputs;

  constructor(
    public elementRef: ElementRef<HTMLElement>,
    public elementsLoader: ElementsLoader,
    public injector: Injector,
    public containerRef: ViewContainerRef
  ) {
    this.element = elementRef.nativeElement;
    this.that = this;
  }

  ngOnInit() {
    if (!this.selector || /[^\w-]/.test(this.selector)) {
      console.error(new Error(`Invalid selector for 'ngx-elements-loader': ${this.selector}`));
      return;
    }

    this.elementsLoader.loadCustomElement(this.selector).then(meta => {
      const componentFactory = meta.injector.get(ComponentFactoryResolver).resolveComponentFactory(meta.componentType);

      const unchangedInputs = new Set<string>(componentFactory.inputs.map(({ propName }) => propName));
      this.addInputFn(componentFactory.inputs);

      const ngZone = meta.injector.get<NgZone>(NgZone);
      const elementZone = typeof Zone === 'undefined' ? null : ngZone.run(() => Zone.current);

      const componentRef = this.containerRef.createComponent(meta.componentType, {
        index: 0,
        injector: meta.injector,
        ngModuleRef: meta.moduleRef
      });

      const viewChangeDetectorRef = componentRef.injector.get(ChangeDetectorRef);
      const implementsOnChanges = isFunction((componentRef.instance as OnChanges).ngOnChanges);
    });
  }

  registerOnAddInputs(fn: AddInputs) {
    this.addInputFn = fn;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const c in changes) {
      console.log(c + '===' + changes[c].currentValue);
    }
  }
}
