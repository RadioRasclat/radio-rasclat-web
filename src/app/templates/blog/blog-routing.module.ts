import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '../shell/shell.service';
import { BlogComponent } from './blog.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'blog',
      component: BlogComponent,
      data: { title: 'Radio Rasclat — Blog' },
    },
    {
      path: 'blog/post/:id',
      component: BlogSingleComponent,
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class BlogRoutingModule {}
