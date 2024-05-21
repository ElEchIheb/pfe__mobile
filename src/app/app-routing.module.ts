import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Dash2Component } from './dash2/dash2.component';
import { AuthguardService } from 'src/app/pages/login/authguard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'insurance-form',
    loadChildren: () => import('./insurance-form/insurance-form.module').then( m => m.InsuranceFormPageModule)
  },
  {
    path: 'dash2',
    loadChildren: () => import('./dash2/dash2.module').then(m => m.Dash2Module)
  },
  {
    path: 'bull',
    loadChildren: () => import('./bull/bull.module').then(m => m.BullModule)
  },
  {
    path: 'dash',
    loadChildren: () => import('./dash-board/dash-board.module').then(m => m.DashBoardModule)
  },
  {
    path: 'my-req',
    loadChildren: () => import('./my-req/my-req.module').then(m => m.MyReqModule)
  },
  {
    path: 'send-req',
    loadChildren: () => import('./send-req/send-req.module').then(m => m.SendReqModule)
  },
  {
    path: 'profile-form',
    loadChildren: () => import('./profile-form/profile-form.module').then( m => m.ProfileFormPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then(m => m.TestModule)
  },
  {
    path: 'bot',
    loadChildren: () => import('./conf-bot/conf-bot.module').then(m => m.ConfBotModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule)
  },

   {
      path:'forgot-password',
      loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.Forgotpassword)
    },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })

  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
