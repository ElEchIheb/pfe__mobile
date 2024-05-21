import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendReqRoutingModule } from './send-req-routing.module';
import { IonicModule } from '@ionic/angular';
import {  SendReqComponent } from './send-req.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SendReqComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    SendReqRoutingModule
  ],
  exports: [SendReqComponent]
})
export class SendReqModule { }
