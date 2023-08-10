import { Component, ElementRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ElementsLoader } from './elements-loader';
import { ReplaySubject, Subject, takeUntil } from 'rxjs';

/**
 * 懒加载web component
 * @example
 * ``` ts
 * export class TestModule implements WithWebComponent {
 *   webComponent = TestComponent;
 * }
 * ```
 */
@Component({
  selector: 'lazy-web-component',
  template: ''
})
export class LazyWebComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  readonly element: HTMLElement;
  readonly that: LazyWebComponent;
  @Input() selector!: string;
  @Output() readonly onload = new ReplaySubject<any>();

  constructor(
    public elementRef: ElementRef<HTMLElement>,
    public elementsLoader: ElementsLoader
  ) {
    this.element = elementRef.nativeElement;
    this.that = this;
  }

  ngOnInit() {
    if (!this.selector || /[^\w-]/.test(this.selector)) {
      console.error(new Error(`Invalid selector for 'ngx-elements-loader': ${this.selector}`));
      return;
    }

    console.log(this.element.attributes);
    setTimeout(() => console.log(this.element.attributes), 3000);
    this.element.textContent = '';
    this.element.appendChild(document.createElement(this.selector));

    const loader = this.elementsLoader.loadCustomElement(this.selector, detail => {
      const ngAfterContentInit = detail.componentType.prototype.ngAfterContentInit;
      const that = this;
      detail.componentType.prototype.ngAfterContentInit = function () {
        that.onload.next(this);
        that.onload.complete();

        if (that.element.onload) {
          that.element.onload(this);
        }

        if (ngAfterContentInit) {
          ngAfterContentInit.call(this);
        }
      };
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
