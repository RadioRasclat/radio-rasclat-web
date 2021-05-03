import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '../shell/shell.service';
import { SearchComponent } from './search.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'search',
      component: SearchComponent,
      data: { title: 'Radio Rasclat — Search' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class SearchRoutingModule {}
