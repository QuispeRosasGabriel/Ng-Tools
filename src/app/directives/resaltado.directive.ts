import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private element: ElementRef) {
    console.log("Directiva llamada");
    // element.nativeElement.style.backgroundColor = "#ccc"
  }

  @Input("appResaltado") color: string;

  @HostListener('mouseenter') mouseEntro() {
    this.element.nativeElement.style.backgroundColor = this.color
  }

  @HostListener('mouseleave') moouseSalio() {
    this.element.nativeElement.style.backgroundColor = null
  }
}
