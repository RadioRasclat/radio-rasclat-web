import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowsComponent } from './shows.component';
import { ShowsSingleComponent } from './shows-single/shows-single.component';
import { Shell } from '../shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'shows',
      component: ShowsComponent,
      data: { title: 'Radio Rasclat — Shows' },
    },
    {
      path: 'shows/:id',
      component: ShowsSingleComponent,
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ShowsRoutingModule {}
