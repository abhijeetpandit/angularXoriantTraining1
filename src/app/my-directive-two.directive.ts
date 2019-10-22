import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirectiveTwo]'
})
export class MyDirectiveTwoDirective {

  constructor(private elementRef:ElementRef) { }

  @HostListener('mouseenter')onMouseEnter2() {
    this.elementRef.nativeElement.style.fontWeight = 'bold';
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')onMouseLeave2() {
    this.elementRef.nativeElement.style.fontWeight = 'normal';
    this.elementRef.nativeElement.style.backgroundColor = 'initial';
  }
}
