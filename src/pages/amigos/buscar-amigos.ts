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
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private actionSheetCtrl: ActionSheetController, private _as: AmigosService,
    private _ls: LoginService
  ) {
    this.usuario = this._ls.usuario;
    console.log(this.usuario);
  }

  buscarAmigo(nombre: string) {
    console.log("buscando " + nombre);
    if (nombre != undefined && nombre != null && nombre.length > 0) {
      this._as.burcarUsuario(nombre).subscribe(data => {
        this.amigos = data;
      });
    } else {
      this.amigos = [];
    }
    for (let amigo in this.amigos) {
      console.log(this.amigos[amigo]['user'])
    }
    //  console.log(this.amigos);
  }
  opcionesAmigo(amigo: any, k: string) {
    //this.friendId = k;
    console.log(amigo)
    this.presentActionSheet(amigo, k);
  }
  presentActionSheet(amigo: any, keyFriend: string) {
    let actionSheet = this.actionSheetCtrl.create({
      title: `Acciones con ${amigo.username} `,
      buttons: [
        {
          text: 'Solicitar',
          handler: () => {
            //  this.nuevoAmigo()

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
