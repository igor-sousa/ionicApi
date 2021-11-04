import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlteracaoPage } from './alteracao.page';

const routes: Routes = [
  {
    path: '',
    component: AlteracaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlteracaoPageRoutingModule {}
