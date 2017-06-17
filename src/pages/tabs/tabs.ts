import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';

import {PaisesPage} from '../paises/paises';
import {AmigosPage} from '../amigos/amigos';
import {IntercambiosPage} from '../intercambios/intercambios';
@Component({

  templateUrl: 'tabs.html'
})
export class TabsPage {
  paisesPage = PaisesPage;
  amigosPage = AmigosPage;
  intercambiosPage = IntercambiosPage;
  constructor(public navCtrl: NavController) {
    // Id is 1, nav refers to Tab1
    //  console.log(this.nav.id)
  }
}
