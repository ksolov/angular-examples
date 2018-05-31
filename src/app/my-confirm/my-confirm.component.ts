import { Component } from '@angular/core';

@Component({
  selector: 'app-my-confirm',
  templateUrl: './my-confirm.component.html',
  styleUrls: ['./my-confirm.component.css']
})
export class MyConfirmComponent {

  onDelete() {
    console.log('deleted!');
  }

}
