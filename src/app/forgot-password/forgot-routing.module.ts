import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password.component';

import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordComponent
  },];
  @NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class ForgotRoutingModule { }
