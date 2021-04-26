import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '../shell/shell.service';
import { ImprintComponent } from './imprint.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'imprint',
      component: ImprintComponent,
      data: { title: 'Radio Rasclat — Imprint' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ImprintRoutingModule {}
