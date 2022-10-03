import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SirPage } from './sir.page';

const routes: Routes = [
  {
    path: '',
    component: SirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SirPageRoutingModule {}
