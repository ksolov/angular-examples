import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyColorComponent }    from './my-color/my-color.component';
import { MyRepeateComponent }  from './my-repeate/my-repeate.component';
import { MyConfirmComponent }  from './my-confirm/my-confirm.component';

const routes: Routes = [
  { path: '', redirectTo: '/myColor', pathMatch: 'full' },
  { path: 'myColor', component: MyColorComponent },
  { path: 'myRepeate', component: MyRepeateComponent },
  { path: 'myConfirm', component: MyConfirmComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
