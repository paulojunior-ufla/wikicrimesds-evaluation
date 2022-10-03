import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SirPageRoutingModule } from './sir-routing.module';

import { SirPage } from './sir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SirPageRoutingModule
  ],
  declarations: [SirPage]
})
export class SirPageModule {}
