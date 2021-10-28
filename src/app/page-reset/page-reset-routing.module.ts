import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageResetPage } from './page-reset.page';

const routes: Routes = [
  {
    path: '',
    component: PageResetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageResetPageRoutingModule {}
