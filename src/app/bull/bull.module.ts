import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BullRoutingModule } from './bull-routing.module';
import { IonicModule } from '@ionic/angular';
import { BullComponent } from './bull.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [BullComponent],
  imports: [
    CommonModule,
    BullRoutingModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [BullComponent]
})
export class BullModule { }
