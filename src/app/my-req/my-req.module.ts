import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyReqRoutingModule } from './my-req-routing.module';
import { IonicModule } from '@ionic/angular';
import { MyReqComponent } from './my-req.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MyReqComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    MyReqRoutingModule
  ],
  exports: [MyReqComponent]
})
export class MyReqModule { }
