import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http"


import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import 'rxjs/Rx';
@Injectable()
export class AmigosService {
  urlFirebase: string = "https://heroesdelfutbol-dc20e.firebaseio.com/";
  token: string;
  constructor(private http: Http) {
  }
  /*
  return this.http.get(this.urlFirebase + userId + '/user/' + '.json?auth=' + token)
    .map((response: Response) => {
      return response.json();

    })
    */
  getActiveUser() {
    return firebase.auth().currentUser;
  }
  burcarUsuario(nombre: string) {
    return this.http.get(this.urlFirebase + '.json?auth=' + this.token)
      .map((response) => {
        return response.json();
      });
    // return Observable.from(firebase.database().ref('/users/').orderByChild('username').
    // startAt(nombre).once('value').then(function(snapshot) {
    //     if (snapshot.val() != null && snapshot.val() != undefined && snapshot.val() != "") {
    //       return snapshot.val();
    //     } else return [];
    //
    //   }));
  }
}
