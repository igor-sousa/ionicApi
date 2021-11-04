import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlteracaoPageRoutingModule } from './alteracao-routing.module';

import { AlteracaoPage } from './alteracao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlteracaoPageRoutingModule
  ],
  declarations: [AlteracaoPage]
})
export class AlteracaoPageModule {}
