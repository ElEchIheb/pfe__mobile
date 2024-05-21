import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dash2Component } from './dash2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Dash2Component
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Dash2RoutingModule { }
