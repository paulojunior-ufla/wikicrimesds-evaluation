import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RrPageRoutingModule } from './rr-routing.module';

import { RrPage } from './rr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RrPageRoutingModule
  ],
  declarations: [RrPage]
})
export class RrPageModule {}
