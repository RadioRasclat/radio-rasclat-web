import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '../shell/shell.service';
import { ScheduleComponent } from './schedule.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'schedule',
      component: ScheduleComponent,
      data: { title: 'Radio Rasclat — Schedule' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ScheduleRoutingModule {}
