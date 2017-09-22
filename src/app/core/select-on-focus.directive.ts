import { Directive, ElementRef, Renderer, HostListener} from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[select-on-focus]'})
export class SelectOnFocusDirective {
  el: ElementRef;
  observer: any;

  constructor(el: ElementRef, renderer: Renderer) {
    this.el = el;
  }

  @HostListener('focus')
  onFocus() {
    if (!!this.el.nativeElement.value) {
        this.el.nativeElement.select();
    }
  }

}
