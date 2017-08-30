import { Directive, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[numbers-only]'
})
export class NumbersOnlyDirective {

    constructor(public el: ElementRef) {
      console.log( this.el.nativeElement);
      this.el.nativeElement.onkeypress = (event: any) => {
        if (event.which < 48 || event.which > 57) {
                event.preventDefault();
            }
      };

  }

}
