import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyReqComponent } from './my-req.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: MyReqComponent
  },
  
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyReqRoutingModule { }
