import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appMyColor]'
})
export class MyColorDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {  }

  @Input("appMyColor") highlightColor: string;

  @HostListener("mouseenter") onMouseEnter() {
    this.changeColor1(this.highlightColor);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.changeColor1(null);
  }

  private changeColor1(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, "color", color);
  }
}
