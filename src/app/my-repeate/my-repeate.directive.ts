import {Directive, Input, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMyRepeate], appMyRepeate'
})
export class MyRepeateDirective {

  @Input() message: string;
  @Input() count: number;

  constructor(private elenemtRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    for(let i=0; i < this.count; i++) {
      let elem: HTMLDivElement = this.renderer.createElement("div");
      this.renderer.appendChild(this.elenemtRef.nativeElement, elem);
      elem.innerHTML = `${this.message} ${i}`;
    }
  }

}
