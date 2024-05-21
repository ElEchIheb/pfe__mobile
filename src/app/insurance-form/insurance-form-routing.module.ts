import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsuranceFormPage } from './insurance-form.page';

const routes: Routes = [
  {
    path: '',
    component: InsuranceFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsuranceFormPageRoutingModule {}
