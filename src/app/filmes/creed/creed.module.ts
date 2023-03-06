import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreedPageRoutingModule } from './creed-routing.module';

import { CreedPage } from './creed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreedPageRoutingModule
  ],
  declarations: [CreedPage]
})
export class CreedPageModule {}
