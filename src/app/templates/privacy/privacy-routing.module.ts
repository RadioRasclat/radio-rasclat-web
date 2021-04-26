import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '../shell/shell.service';
import { PrivacyComponent } from './privacy.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'privacy',
      component: PrivacyComponent,
      data: { title: 'Radio Rasclat — Privacy' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class PrivacyRoutingModule {}
