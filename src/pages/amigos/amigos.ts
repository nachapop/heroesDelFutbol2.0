import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {BuscarAmigosPage} from './buscar-amigos';
import {AmigosService, AmigosInterface} from '../../services/amigos.service';
import {LoginService, UsuarioInterface} from '../../services/login.service';
@Component({
  selector: 'page-amigos',
  templateUrl: 'amigos.html',
})
export class AmigosPage {
  loader: any;



  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _as: AmigosService,
    private _ls: LoginService,
    private loadingCtrl: LoadingController) {
    console.log("amigos constructor")
    this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loader.present();
    this._as.obtenerAmigos("amigo2")
      .subscribe(data => {
        this._as.amigos = [];

        let amigosRecibo = data;
        for (let amigol of amigosRecibo) {
          let amigo = {
            aceptada: amigol.aceptada,
            amigo1: amigol.amigo1,
            amigo2: amigol.amigo2,
            $key: amigol.$key,
            respondida: amigol.respondida,
            yo: amigol.amigo2
          };
          console.log("PUSHING FRIEND1")
          this._as.amigos.push(amigo);
        }
        this._as.obtenerAmigos("amigo1")
          .subscribe(data => {

            let amigosEnvio = data;
            for (let amigol of amigosEnvio) {
              let amigo: AmigosInterface = {
                aceptada: amigol.aceptada,
                amigo1: amigol.amigo1,
                amigo2: amigol.amigo2,
                $key: amigol.$key,
                respondida: amigol.respondida,
                yo: amigol.amigo1
              };
              console.log("PUSHING FRIEND2")
              this._as.amigos.push(amigo);
            }
            this._as.amigosComodin = [];
            for (let amigo of this._as.amigos) {
              if (amigo.amigo1 === this._ls.usuario.id) {
                this._as.buscarAmigoPorId(amigo.amigo2)
                  .subscribe(data => {
                    this.anadirDatosPersonales(data, amigo)
                  });
              } else {
                this._as.buscarAmigoPorId(amigo.amigo1)
                  .subscribe(data => {
                    this.anadirDatosPersonales(data, amigo)
                  });
              }
            }
            console.log(this._as.amigosComodin);
            this.loader.dismiss();
          });
      });

  }
  anadirDatosPersonales(data, amigo) {
    let amigoCompleto: AmigosInterface = {
      aceptada: amigo.aceptada,
      amigo1: amigo.amigo1,
      amigo2: amigo.amigo2,
      $key: amigo.$key,
      respondida: amigo.respondida,
      yo: amigo.yo,
      amigoNombre: data.nuevoNombre,
      amigoImagen: data.imagen
    }
    this._as.amigosComodin.push(amigoCompleto)
  }
  navegarPageAmigos() {
    this.navCtrl.push(BuscarAmigosPage)
  }
}
