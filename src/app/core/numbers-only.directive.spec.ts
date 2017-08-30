import { NumbersOnlyDirective } from './numbers-only.directive';
import { ElementRef } from '@angular/core';

describe('NumbersOnlyDirective', () => {
  it('should create an instance', () => {
    const el: ElementRef = undefined;
    const directive = new NumbersOnlyDirective(el);
    expect(directive).toBeTruthy();
  });
});
