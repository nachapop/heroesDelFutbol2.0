import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EquipoPage } from './equipo';

@NgModule({
  declarations: [
    EquipoPage,
  ],
  imports: [
    IonicPageModule.forChild(EquipoPage),
  ],
  exports: [
    EquipoPage
  ]
})
export class EquipoPageModule {}
