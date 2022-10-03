import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RrPage } from './rr.page';

const routes: Routes = [
  {
    path: '',
    component: RrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RrPageRoutingModule {}
