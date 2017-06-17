import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RepetidosPage} from '../repetidos/repetidos';

@Component({
  selector: 'page-intercambios',
  templateUrl: 'intercambios.html',
})
export class IntercambiosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntercambiosPage');
  }
  repetidas() {
    this.navCtrl.push(RepetidosPage);
  }
}
