import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(element: ElementRef) {
    element.nativeElement.innerText="Text added by directive";
  }

}
