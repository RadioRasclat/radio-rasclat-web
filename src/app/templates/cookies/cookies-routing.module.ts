import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '../shell/shell.service';
import { CookiesComponent } from './cookies.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'cookie-policy',
      component: CookiesComponent,
      data: { title: 'Radio Rasclat — Cookie Policy' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class CookiesRoutingModule {}
