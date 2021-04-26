import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '../shell/shell.service';
import { AboutComponent } from './about.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'about',
      component: AboutComponent,
      data: { title: 'Radio Rasclat — About' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AboutRoutingModule {}
