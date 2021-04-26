import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '../shell/shell.service';
import { LicensesComponent } from './licenses.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'licenses',
      component: LicensesComponent,
      data: { title: 'Radio Rasclat — Licenses' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class LicensesRoutingModule {}
