import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Http, Response} from '@angular/http';
import { Platform } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import 'rxjs/Rx';
@Injectable()
export class LoginService {
  urlFirebase: string = "https://heroesdelfutbol-dc20e.firebaseio.com/";
  user: Observable<firebase.User>;
  cardsArray: number[] = [];
  newCardsArray: any = {};
  usuario: UsuarioInterface;
  dataUser: any;
  token: string;
  isAuthenticated: boolean = false;
  public INTERVALODETIEMPO: number;
  constructor(private http: Http, private afAuth: AngularFireAuth,
    private platform: Platform, private fb: Facebook
  ) {
    this.INTERVALODETIEMPO = 4 * 3600000;
    this.usuario = {
      id: "",
      nombre: "",
      imagen: "",
      correo: "",
      ultimaConexion: 0,
      primeraConexion: 0,
      ultimaEntrega: 0,
      proximaEntrega: 0,
      nuevoNombre: ""
    };
    afAuth.authState.subscribe((user: firebase.User) => {
      if (!user) {
        this.dataUser = null;
        return;
      }
      this.dataUser = user;
    });
  }

  /*  login() {
      return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }*/
    getActiveUser() {
      return firebase.auth().currentUser;
    }
  signInWithFacebook() {
    if (this.platform.is('cordova')) {
      return this.fb.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential);
      })
    }
    else {
      return this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider());

    }
  }
  logout() {
    firebase.auth().signOut();
  }

  writeUserData(usuario: UsuarioInterface) {

    return this.http.put(this.urlFirebase + usuario.id + '/user/' + '.json?auth=' + this.token, usuario)
      .map((response: Response) => {
        console.log(response);
        return response.json()
      })
  }

  getUserdata(userId: string) {
    return this.http.get(this.urlFirebase + userId + '/user/' + '.json?auth=' + this.token)
      .map((response: Response) => {
        return response.json();

      })
  }

  createCardsData(userId: string) {
    for (let i = 0; i < 142; i++) {
      this.cardsArray.push(0);
    }
    console.log(this.cardsArray);
    return this.http.put(this.urlFirebase + userId + '/cards/' + '.json?auth=' + this.token, this.cardsArray)
      .map((response: Response) => {
        return response.json()
      })
  }

  getCardsData(userId: string) {
    return this.http.get(this.urlFirebase + userId + '/cards/' + '.json?auth=' + this.token)
      .map((response: Response) => {
        return response.json();
      })
  }

  updateCardsData(userId: string, attributes: any) {
    return this.http.patch(this.urlFirebase + userId + '/cards' + '.json?auth=' + this.token, attributes)
      .map((response: Response) => {
        return response.json();
      })
  }



  setTimePrimeraConexion(userId: string) {
    return this.http.patch(this.urlFirebase + userId + '/user/' + '.json?auth=' + this.token,
      {
        primeraConexion: firebase.database.ServerValue.TIMESTAMP,
        ultimaConexion: firebase.database.ServerValue.TIMESTAMP
      })
      .map((response: Response) => {
        return response.json()
      })
  }

  setTimeUltimaConexion(userId: string) {
    return this.http.patch(this.urlFirebase + userId + '/user/' + '.json?auth=' + this.token, {
      ultimaConexion: firebase.database.ServerValue.TIMESTAMP
    })
      .map((response: Response) => {
        return response.json()
      })
  }
  setTimeProximaEntrega(userId: string, time: number) {
    return this.http.patch(this.urlFirebase + userId + '/user/' + '.json?auth=' + this.token,
      {
        ultimaEntrega: firebase.database.ServerValue.TIMESTAMP,
        proximaEntrega: time + this.INTERVALODETIEMPO
      })
      .map((response: Response) => {

        return response.json()
      })
  }
}
export interface UsuarioInterface {
  id: string;
  nombre: string;
  imagen: string;
  correo: string;
  ultimaConexion: number;
  primeraConexion: number;
  ultimaEntrega: number;
  proximaEntrega: number;
  nuevoNombre: string;
}
