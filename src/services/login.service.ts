import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import {Http, Response} from '@angular/http';
import { Platform } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import 'rxjs/Rx';
@Injectable()
export class LoginService {
  urlFirebase: string = "https://heroesdelfutbol-dc20e.firebaseio.com/";
  users: Observable<firebase.User>;
  cardsArray: number[] = [];
  newCardsArray: number[] = [];
  usuario: UsuarioInterface;
  dataUser: any;
  token: string;
  isAuthenticated: boolean = false;
  public INTERVALODETIEMPO: number;
  constructor(private http: Http, private afAuth: AngularFireAuth,
    private googlePlus: GooglePlus,
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
      nuevoNombre: "",
      nombreLower: ""
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
  signInWithGoogle() {
    if (this.platform.is('cordova')) {

      return this.googlePlus.login({
        'webClientId': '670769318517-ugbnm4ho3i1uot2amppk45t5120d33tl.apps.googleusercontent.com',
        'offline': true
      }).then(res => {
        //console.log("respuesta google", res.json());
        const googleCredential = firebase.auth.GoogleAuthProvider.credential(res.idToken);

        return firebase.auth().signInWithCredential(googleCredential).
          then(suc => {

          }).catch(ns => {
            alert("error al logueate. Intentalo otra vez")
          })
      })
    } else {
      // Cordova not accessible, add mock data if necessy
      return firebase.auth().signInWithPopup(
        new firebase.auth.GoogleAuthProvider()).then(data => {
          return data;
        })
    }


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

    return this.http.put(this.urlFirebase + '/users/' + usuario.id + '.json?auth=' + this.token, usuario)
      .map((response: Response) => {
        return response.json()
      })
  }

  getUserdata(userId: string) {
    return this.http.get(this.urlFirebase + '/users/' + userId + '.json?auth=' + this.token)
      .map((response: Response) => {
        return response.json();

      })
  }

  createCardsData(userId: string) {
    for (let i = 0; i < 142; i++) {
      this.cardsArray.push(0);
    }
    console.log(this.cardsArray);
    return this.http.put(this.urlFirebase + '/cards/' + userId + '.json?auth=' + this.token, this.cardsArray)
      .map((response: Response) => {
        return response.json()
      })
  }

  getCardsData(userId: string) {
    return this.http.get(this.urlFirebase + '/cards/' + userId + '.json?auth=' + this.token)
      .map((response: Response) => {
        return response.json();
      })
  }

  updateCardsData(userId: string, attributes: any) {
    return this.http.patch(this.urlFirebase + '/cards/' + userId + '.json?auth=' + this.token, attributes)
      .map((response: Response) => {
        return response.json();
      })
  }



  setTimePrimeraConexion(userId: string) {
    return this.http.patch(this.urlFirebase + '/users/' + userId + '.json?auth=' + this.token,
      {
        primeraConexion: firebase.database.ServerValue.TIMESTAMP,
        ultimaConexion: firebase.database.ServerValue.TIMESTAMP
      })
      .map((response: Response) => {
        return response.json()
      })
  }

  setTimeUltimaConexion(userId: string) {
    return this.http.patch(this.urlFirebase + '/users/' + userId + '.json?auth=' + this.token, {
      ultimaConexion: firebase.database.ServerValue.TIMESTAMP
    })
      .map((response: Response) => {
        return response.json()
      })
  }
  setTimeProximaEntrega(userId: string, time: number) {
    return this.http.patch(this.urlFirebase + '/users/' + userId + '.json?auth=' + this.token,
      {
        ultimaEntrega: firebase.database.ServerValue.TIMESTAMP,
        proximaEntrega: time + this.INTERVALODETIEMPO
      })
      .map((response: Response) => {

        return response.json()
      })
  }
  getCleanedString(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaeeeeiiiioooouuuunc------";
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes

    return str;        // Trim - from end of text

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
  nombreLower: string;
}
