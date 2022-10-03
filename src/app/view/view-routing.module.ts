import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPage } from './view.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPage,
    children: [
      {
        path: 'sir',
        children: [
          {
            path: '',
            loadChildren: () => import('../sir/sir.module').then(m => m.SirPageModule),
          }
        ]
      },
      {
        path: 'rr',
        children: [
          {
            path: '',
            loadChildren: () => import('../rr/rr.module').then(m => m.RrPageModule),
          }
        ]
      },
      {
        path: '',
        redirectTo: 'view/sir',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'view/sir',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPageRoutingModule {}
