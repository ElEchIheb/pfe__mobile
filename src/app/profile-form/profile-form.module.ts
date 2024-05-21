import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileFormPageRoutingModule } from './profile-form-routing.module';

import { ProfileFormPage } from './profile-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileFormPageRoutingModule, // Import FormsModule if needed
    ReactiveFormsModule // Import ReactiveFormsModule
  ],
  declarations: [ProfileFormPage]
})
export class ProfileFormPageModule {}
