import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLogoHighlight]'
})
export class LogoHighlightDirective {

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.color = '#ff502f';
   }

}
