import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileFormPage } from './profile-form.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileFormPageRoutingModule {}
