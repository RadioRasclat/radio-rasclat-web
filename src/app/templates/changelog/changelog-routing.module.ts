import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '../shell/shell.service';
import { ChangelogComponent } from './changelog.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'changelog',
      component: ChangelogComponent,
      data: { title: 'Radio Rasclat — Changelog' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ChangelogRoutingModule {}
