import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyConfirm]'
})
export class MyConfirmDirective {

  @Input('appMyConfirm')
  onConfirmed: Function = () => { }

  @HostListener('click') onConfirm(event: Event) {
    const confirmed = window.confirm('delete?');

    if (confirmed) {
      this.onConfirmed();
    }
  }

}
