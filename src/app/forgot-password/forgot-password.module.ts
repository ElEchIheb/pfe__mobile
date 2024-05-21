import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ForgotRoutingModule } from './forgot-routing.module';



@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    IonicModule,
    ForgotRoutingModule
  ],
  exports: [ForgotPasswordComponent]

})
export class Forgotpassword { 
    
}
