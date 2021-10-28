import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageResetPageRoutingModule } from './page-reset-routing.module';

import { PageResetPage } from './page-reset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageResetPageRoutingModule
  ],
  declarations: [PageResetPage]
})
export class PageResetPageModule {}
