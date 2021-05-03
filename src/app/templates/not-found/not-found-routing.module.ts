import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '../shell/shell.service';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: '404',
      component: NotFoundComponent,
      data: { title: 'Radio Rasclat — 404' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class NotFoundRoutingModule {}
