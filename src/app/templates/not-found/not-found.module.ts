import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [CommonModule, TranslateModule, NotFoundRoutingModule, SharedModule],
  declarations: [NotFoundComponent],
})
export class NotFoundModule {}
