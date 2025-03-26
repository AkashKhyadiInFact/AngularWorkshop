import { AfterViewInit, Directive, inject, ElementRef } from '@angular/core';

@Directive({
  selector: 'input[appFocus]'
})
export class FocusDirective implements AfterViewInit {
  elementRef: HTMLInputElement = inject(ElementRef).nativeElement ;

  ngAfterViewInit() {
    this.elementRef.focus();
  }

}
