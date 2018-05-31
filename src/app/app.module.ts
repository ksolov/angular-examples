import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyColorDirective } from './my-color/my-color.directive';
import { MyRepeateDirective } from './my-repeate/my-repeate.directive';
import { MyConfirmComponent } from './my-confirm/my-confirm.component';
import { MyConfirmDirective } from './my-confirm/my-confirm.directive';
import { MenuComponent } from './menu/menu.component';
import { MyColorComponent } from './my-color/my-color.component';
import { MyRepeateComponent } from './my-repeate/my-repeate.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MyColorDirective,
    MyRepeateDirective,
    MyConfirmComponent,
    MyConfirmDirective,
    MenuComponent,
    MyColorComponent,
    MyRepeateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
