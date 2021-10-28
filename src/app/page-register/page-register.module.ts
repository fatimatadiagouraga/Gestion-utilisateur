import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageRegisterPageRoutingModule } from './page-register-routing.module';

import { PageRegisterPage } from './page-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageRegisterPageRoutingModule
  ],
  declarations: [PageRegisterPage]
})
export class PageRegisterPageModule {}
