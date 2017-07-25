import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';
@Injectable()
export class AjustesService {
  usuario = {
    id: ""
  }
  constructor(private storage: Storage,
    private platform: Platform) {

  }

  cargar_storage() {
    let promesa = new Promise((resolve, reject) => {
      if (this.platform.is("cordova")) {
        //dispositivo

        this.storage.ready()
          .then(() => {
            this.storage.get("usuario")
              .then(usuario => {
                if (usuario) {
                  this.usuario = usuario;
                }
                resolve();
              })
          })
      } else {
        //escritorio
        if (localStorage.getItem("usuario"))
          this.usuario = JSON.parse(localStorage.getItem("usuario"));
      }

      resolve();
    });
    return promesa;



  }

  guardar_storage(usuario) {
    if (this.platform.is("cordova")) {
      //dispositivo
      this.storage.ready()
        .then(() => {
          this.storage.set("usuario", this.usuario)
        })
    } else {
      //escritorio
      localStorage.setItem("ajustes", JSON.stringify(usuario));
    }
  }
}
