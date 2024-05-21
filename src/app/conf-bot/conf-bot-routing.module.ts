import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfBotComponent } from './conf-bot.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ConfBotComponent
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfBotRoutingModule { }
