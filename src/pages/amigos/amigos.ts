import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {BuscarAmigosPage} from './buscar-amigos';
import {AmigosService} from '../../services/amigos.service';
@Component({
  selector: 'page-amigos',
  templateUrl: 'amigos.html',
})
export class AmigosPage {
  loader: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _amigosService: AmigosService,

    private loadingCtrl: LoadingController) {
    this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this._amigosService.getActiveUser().getIdToken()
      .then(
      (token: string) => {
        this._amigosService.token = token;

        this.loader.dismiss();
      })
      .catch(error => {
        console.log(error);
        this.loader.dismiss();
      });
  }

  navegarPageAmigos() {
    this.navCtrl.push(BuscarAmigosPage)
  }
}
