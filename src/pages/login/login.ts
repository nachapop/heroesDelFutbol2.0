import { Component } from '@angular/core';
import {Platform, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import {LoginService} from '../../services/login.service';

import {TabsPage} from '../tabs/tabs';
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loader: any;
  numeroCromoAEntregar: number;
  constructor(public navCtrl: NavController,
    private navParams: NavParams,
    private _loginService: LoginService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private afAuth: AngularFireAuth, private platform: Platform) {
  }

  loguearse() {

    this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });

    this.loader.present();
    this._loginService.signInWithFacebook()
      .then(data => {
        console.log(data)
        if (this.platform.is('cordova')) {
          var user = this._loginService.dataUser;

        } else {
          var user = data.user;

        }
        this._loginService.usuario.id = user.uid;
        this._loginService.usuario.correo = user.email;
        this._loginService.usuario.nombre = user.displayName;
        this._loginService.usuario.imagen = user.photoURL;
        this._loginService.usuario.nuevoNombre = user.displayName;
        this.getToken();
      });
    // this.afAuth.auth
    //   .signInWithPopup(new firebase.auth.FacebookAuthProvider())
    //   .then(data => {
    //     console.log(data)
    //     var user = data.user;
    //     this._loginService.usuario.id = user.uid;
    //     this._loginService.usuario.correo = user.email;
    //     this._loginService.usuario.nombre = user.displayName;
    //     this._loginService.usuario.imagen = user.photoURL;
    //     this._loginService.usuario.nuevoNombre = user.displayName;
    //
    //     this.getToken();
    //   });


    //  this.getToken()
  }
  // this._loginService.login()
  //
  //   .then(data => {
  //     var user = data.user;
  //     this._loginService.usuario.id = user.uid;
  //     this._loginService.usuario.correo = data.user.email;
  //     this._loginService.usuario.nombre = data.user.displayName;
  //     this._loginService.usuario.imagen = data.user.photoURL;
  //     this._loginService.usuario.nuevoNombre = data.user.displayName;
  //
  //     this.getToken()
  //   })
  //   .catch(error => {
  //     console.log(error);
  //     this.loader.dismiss();
  //   });

  getToken() {
    this._loginService.getActiveUser().getIdToken()
      .then(
      (token: string) => {
        this._loginService.token = token;
        this.obtenerUsuario();

      })
      .catch(error => {
        console.log(error);
        this.loader.dismiss();
      });

  }

  obtenerUsuario() {
    this._loginService.getUserdata(this._loginService.usuario.id)
      .subscribe(data => {
        if (data == null) {
          //camino1
          this.guardarUsuario();

        } else {
          this._loginService.usuario.id = data.id;
          this._loginService.usuario.correo = data.correo;
          this._loginService.usuario.nombre = data.nombre;
          this._loginService.usuario.imagen = data.imagen;
          this._loginService.usuario.nuevoNombre = data.nuevoNombre;
          this._loginService.usuario.primeraConexion = data.primeraConexion;
          this._loginService.usuario.ultimaEntrega = data.ultimaEntrega;
          this._loginService.usuario.proximaEntrega = data.proximaEntrega;
          /*  this.usuario.primeraConexion = this.reformatearFecha(data.primeraConexion);
            this.usuario.ultimaConexion = this.reformatearFecha(data.ultimaConexion);*/
          //  console.log(this.usuario.ultimaConexion.getHours());
          this.guardarRelojUltimaConexion()
        }

      })
  }

  //camino1
  guardarUsuario() {
    this._loginService.writeUserData(this._loginService.usuario)
      .subscribe(data => {
        this.guardarRelojPrimeraConexion();
      },
      error => {
        console.log(error);
        this.loader.dismiss();
      });
  }
  guardarRelojPrimeraConexion() {
    this._loginService.setTimePrimeraConexion(this._loginService.usuario.id)
      .subscribe(data => {
        this._loginService.usuario.primeraConexion = data.primeraConexion;
        this._loginService.usuario.ultimaConexion = data.ultimaConexion;
        this.guardarProximaEntrega();
        //this.guardarCartas()
      }

      );

  }
  guardarProximaEntrega() {
    this._loginService.setTimeProximaEntrega(this._loginService.usuario.id, this._loginService.usuario.primeraConexion)
      .subscribe(data => {
        this._loginService.usuario.proximaEntrega = data;
        this.guardarCartas()
      }

      );
  }
  guardarCartas() {
    this._loginService
      .createCardsData(this._loginService.usuario.id)
      .subscribe(
      (data) => {

        this.actualizarCardsData();
        //this.getCardsData(idUser, token, loader);
      },
      error => {
        this.loader.dismiss();
      })
  }
  // fin camino 1

  //camino2
  guardarRelojUltimaConexion() {
    this._loginService.setTimeUltimaConexion(this._loginService.usuario.id)
      .subscribe(data => {
        this._loginService.usuario.ultimaConexion = data.ultimaConexion;
        this.obtenerCartas()
      })
  }
  obtenerCartas() {
    this._loginService.getCardsData(this._loginService.usuario.id).subscribe(
      (data) => {
        this._loginService.cardsArray = data;
        if (this._loginService.usuario.ultimaConexion > this._loginService.usuario.proximaEntrega) {
          this.actualizarCardsData();
          console.log('entrega');

        } else {
          console.log('no entrega');
          this.loader.dismiss();
          this.navCtrl.setRoot(TabsPage);
        }
      },
      error => {
        this.loader.dismiss();
      });
  }
  //fin camino 2
  numeroDecromoEntregar() {
    if (this._loginService.usuario.primeraConexion === this._loginService.usuario.ultimaConexion) {
      return 30;
    } else if (this._loginService.usuario.ultimaConexion - this._loginService.usuario.primeraConexion < 604800000)
      return 3;
    return 2;
  }
  actualizarCardsData() {
    var attribute = {}
    for (let i = 0; i < this.numeroDecromoEntregar(); i++) {
      let resultado = this.randomEntre(0, 141)
      this._loginService.cardsArray[resultado] = this._loginService.cardsArray[resultado] + 1
      console.log(this._loginService.cardsArray[resultado]);
      attribute[resultado] = this._loginService.cardsArray[resultado];
      this._loginService.newCardsArray.push(resultado)
    }
    this._loginService.updateCardsData(this._loginService.usuario.id, attribute)
      .subscribe(
      (data) => {
        console.log(data);
        this.actualizarProximaEntrega();
      },
      error => {
        this.loader.dismiss();
      })
  }
  actualizarProximaEntrega() {
    let intervalo = this._loginService.INTERVALODETIEMPO;
    let proximaEntrega = this._loginService.usuario.ultimaConexion + intervalo - intervalo % this._loginService.usuario.primeraConexion;
    this._loginService.setTimeProximaEntrega(this._loginService.usuario.id, proximaEntrega)
      .subscribe(
      () => {
        this._loginService.usuario.proximaEntrega = proximaEntrega;
        this.obtenerCartas();
      },
      error => {
        this.loader.dismiss();
      });
  }
  randomEntre(min, max) {
    return Math.floor(Math.random() * (max - min + 1))
  }
}
