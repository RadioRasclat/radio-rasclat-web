import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '../shell/shell.service';
import { ArtistsComponent } from './artists.component';
import { ArtistsSingleComponent } from '@app/templates/artists/artists-single/artists-single.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'artists',
      component: ArtistsComponent,
      data: { title: 'Radio Rasclat — Artists' },
    },
    {
      path: 'artists/:id',
      component: ArtistsSingleComponent,
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ArtistsRoutingModule {}
