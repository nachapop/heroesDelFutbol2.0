import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import {AmigosService} from '../../services/amigos.service';
import {LoginService, UsuarioInterface} from '../../services/login.service';

@Component({
  selector: 'page-buscar-amigos',
  templateUrl: 'buscar-amigos.html',
})
export class BuscarAmigosPage {
  amigos: UsuarioInterface[] = [];
  usuario: UsuarioInterface;
  arrayAmigos: any = []
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private actionSheetCtrl: ActionSheetController,
    private _as: AmigosService,
    private _ls: LoginService
  ) {
    this.usuario = this._ls.usuario;
    console.log(this.usuario);
  }
  // transform(value: any): any {
  //   let keys = [];
  //   for (let key in value) {
  //     keys.push(key);
  //   }
  //   return keys;
  // }

  buscarAmigo(nombre: string) {
    this.amigos = [];
    if (nombre != undefined && nombre != null && nombre.length > 0) {
      console.log("buscando " + this._ls.getCleanedString(nombre));

      this._as.burcarAmigo(this._ls.getCleanedString(nombre))
        .subscribe(data => {
          this.amigos = data;
        });
    } else {
      this.amigos = [];
    }
  }
  opcionesAmigo(amigo: any, ) {
    this.presentActionSheet(amigo);
  }
  presentActionSheet(amigo: any) {
    let actionSheet = this.actionSheetCtrl.create({
      title: `Acciones con ${amigo.nuevoNombre}`,
      buttons: [
        {
          text: 'Solicitar',
          handler: () => {
            //  this.nuevoAmigo()
            this._as.solicitarAmistad(amigo)
            console.log('Archive clicked');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
