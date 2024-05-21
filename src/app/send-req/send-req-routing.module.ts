import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  SendReqComponent } from './send-req.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: SendReqComponent
  },

];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendReqRoutingModule { }
