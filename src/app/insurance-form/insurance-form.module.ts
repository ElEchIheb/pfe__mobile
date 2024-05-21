import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsuranceFormPageRoutingModule } from './insurance-form-routing.module';

import { InsuranceFormPage } from './insurance-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsuranceFormPageRoutingModule
  ],
  declarations: [InsuranceFormPage]
})
export class InsuranceFormPageModule {}
