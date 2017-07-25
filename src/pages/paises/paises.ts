import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { EquipoPage } from '../equipo/equipo';
import { PaisesService, Pais } from '../../services/paises.service';
import { LoginService, UsuarioInterface } from '../../services/login.service';
import { HeroesService, Heroe } from '../../services/heroes.service';
import {EquipoPage} from '../equipo/equipo';
import {CromosNuevosPage} from '../cromos-nuevos/cromos-nuevos';
@Component({
  selector: 'page-paises',
  templateUrl: 'paises.html',
})
export class PaisesPage {
  paises: Pais[] = [];

  usuario: UsuarioInterface;

  horas: number;
  minutos: number;
  minutosString: string;
  segundos: number;
  heroes: Heroe[];
  numeroDeCromosPais: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  //equipoPage = EquipoPage;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public _paisesService: PaisesService,
    public _heroesService: HeroesService,
    public _loginService: LoginService) {
    this.usuario = this._loginService.usuario;


    this.paises = this._paisesService.getPaises();
    this.proximaEntrega();
    this.heroes = this._heroesService.getHeroes();

    for (let heroe in this.heroes) {
      this.heroes[heroe].numerodecromos = this._loginService.cardsArray[heroe];
      if (this.heroes[heroe].numerodecromos > 0) {
        for (let pais in this.paises) {
          if (this.heroes[heroe].pais === this.paises[pais].nombre) {
            this.numeroDeCromosPais[pais]++;
          }
        }
      }
    }
  }

  proximaEntrega() {
    this.horas = Math.floor((this.usuario.proximaEntrega - this.usuario.ultimaConexion) / 3600000);
    this.minutos = Math.floor(((this.usuario.proximaEntrega - this.usuario.ultimaConexion) / 3600000
      - this.horas) * 60);
    this.segundos = Math.floor((((this.usuario.proximaEntrega - this.usuario.ultimaConexion) / 3600000
      - this.horas) * 60 - this.minutos) * 60)
    setInterval(() => {
      this.segundos--;
      if (this.segundos == 0) {
        this.minutos--;
        this.segundos = 59;
      }
      if (this.minutos == 0) {
        this.horas--;
        this.minutos = 59;
        this.segundos = 59;
      }
      if (this.minutos < 10) {
        this.minutosString = '0' + this.minutos;
      } else {
        this.minutosString = this.minutos + ""
      }
    }, 1000)

  }
  abrirEquipo(nombre: string) {
    console.log(nombre);
    this.navCtrl.push(EquipoPage, { pais: nombre })
    //    [navParams]="{pais : pais}"
  }
  abrirCromosNuevos() {
    this.navCtrl.push(CromosNuevosPage);
  }
}
