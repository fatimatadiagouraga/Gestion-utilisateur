import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagePasswordforgotPageRoutingModule } from './page-passwordforgot-routing.module';

import { PagePasswordforgotPage } from './page-passwordforgot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagePasswordforgotPageRoutingModule
  ],
  declarations: [PagePasswordforgotPage]
})
export class PagePasswordforgotPageModule {}
