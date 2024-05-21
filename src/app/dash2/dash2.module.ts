import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Dash2Component } from './dash2.component';
import { Dash2RoutingModule } from './dash2-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [Dash2Component],
  imports: [
    CommonModule,
    IonicModule,
    Dash2RoutingModule,
    ReactiveFormsModule,
    FormsModule],
    exports: [Dash2Component]
})
export class Dash2Module { }
