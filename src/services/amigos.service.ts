import { Injectable } from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

import {Observable} from 'rxjs/Rx';
import {LoginService, UsuarioInterface} from './login.service';
import { ToastController } from 'ionic-angular';
import {Http, Response} from '@angular/http';

@Injectable()
export class AmigosService {
  urlFirebase: string = "https://heroesdelfutbol-dc20e.firebaseio.com/";
  usuarios$: FirebaseListObservable<any[]>;
  amigos$: FirebaseListObservable<any[]>;
  amigo: FirebaseObjectObservable<any[]>;
  amigosComodin: AmigosInterface[] = [];
  amigos: AmigosInterface[] = []
  constructor(private http: Http,
    private db: AngularFireDatabase,
    private _ls: LoginService,
    public toastCtrl: ToastController) {
    this.amigos$ = db.list('amigos');
  }
  /*
  return this.http.get(this.urlFirebase + userId + '/user/' + '.json?auth=' + token)
    .map((response: Response) => {
      return response.json();

    })
    */



  burcarAmigo(nombreAmigo: string): Observable<UsuarioInterface[]> {
    return this.db.list('users', {
      query: {
        orderByChild: 'nombreLower',
        startAt: nombreAmigo,
        limitToLast: 10,

      }
    });
  }
  // buscarAmigoPorId(idAmigo: string) {
  //   let query = `users/${idAmigo}`
  //   console.log(query);
  //   return this.db.list(query)
  //
  // }
  buscarAmigoPorId(userId: string) {

    let url = this.urlFirebase + '/users/' + userId + '.json?auth=' + this._ls.token

    return this.http.get(url)
      .map((response: Response) => {
        return response.json();

      })
  }
  obtenerAmigos(yo: string) {
    return this.db.list('amigos', {
      query: {
        orderByChild: yo,
        equalTo: this._ls.usuario.id,

      }
    })
  }

  solicitarAmistad(el) {
    for (let amigo of this.amigos) {
      if ((amigo.amigo1 == el.id || amigo.amigo2 == el.id) && this._ls.usuario.id != el.id) {
        this.presentToast("Ya tienes ese amigo en la lista")
        return;
      }
    }
    this.amigos = [];
    this.amigosComodin = [];
    if (this._ls.usuario.id != el.id) {
      return this.amigos$.push({
        amigo1: this._ls.usuario.id,
        amigo2: el.id,
        aceptada: false,
        respondida: false
      });

    } else {
      this.presentToast('Accion imposible')
    }
  }
  // return Observable.from(firebase.database().ref('/users').orderByChild('nombreLower').startAt(nombreAmigo).once('value')
  //   .then(function(snapshot) {
  //     if (snapshot.val() != null && snapshot.val() != undefined && snapshot.val() != "") {
  //       return snapshot.val();
  //     } else return [];
  //
  //   }));
  presentToast(mensaje: string) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
}


export interface AmigosInterface {
  $key?: string,
  amigo1: string,
  amigo2: string,
  aceptada: boolean,
  respondida: boolean,
  yo?: string,
  amigoNombre?: string,
  amigoImagen?: string
}
