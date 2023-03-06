import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreedPage } from './creed.page';

const routes: Routes = [
  {
    path: '',
    component: CreedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreedPageRoutingModule {}
