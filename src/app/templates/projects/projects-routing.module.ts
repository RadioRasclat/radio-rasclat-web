import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '../shell/shell.service';
import { ProjectsComponent } from './projects.component';
import { ProjectsSingleComponent } from './projects-single/projects-single.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'events',
      component: ProjectsComponent,
      data: { title: 'Radio Rasclat • Projects' },
    },
    {
      path: 'projects/project/:id',
      component: ProjectsSingleComponent,
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ProjectsRoutingModule {}
