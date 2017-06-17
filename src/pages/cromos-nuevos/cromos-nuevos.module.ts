import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CromosNuevosPage } from './cromos-nuevos';

@NgModule({
  declarations: [
    CromosNuevosPage,
  ],
  imports: [
    IonicPageModule.forChild(CromosNuevosPage),
  ],
  exports: [
    CromosNuevosPage
  ]
})
export class CromosNuevosPageModule {}
