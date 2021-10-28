import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'page-register',
    loadChildren: () => import('./page-register/page-register.module').then( m => m.PageRegisterPageModule)
  },
  {
    path: 'page-passwordforgot',
    loadChildren: () => import('./page-passwordforgot/page-passwordforgot.module').then( m => m.PagePasswordforgotPageModule)
  },
  {
    path: 'page-reset',
    loadChildren: () => import('./page-reset/page-reset.module').then( m => m.PageResetPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./bienvenu/bienvenu.module').then( m => m.BienvenuPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
