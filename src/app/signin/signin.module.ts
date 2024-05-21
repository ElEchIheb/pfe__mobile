import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    IonicModule,
    SigninRoutingModule
  ],
  exports: [SigninComponent]

})
export class SigninModule { }
