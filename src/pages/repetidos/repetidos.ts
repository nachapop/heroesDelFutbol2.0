import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginService} from '../../services/login.service';
import {HeroesService, Heroe} from '../../services/heroes.service';

@Component({
  selector: 'page-repetidos',
  templateUrl: 'repetidos.html',
})
export class RepetidosPage {
  cardsArray: number[];
  heroes: Heroe[];
  heroesRepetidos: Heroe[] = [];
  heroesRepetidosPorPaises: Heroe[] = [];
  constructor(private _loginService: LoginService, private _heroesService: HeroesService) {
    this.heroes = this._heroesService.getHeroes();
    this.cardsArray = this._loginService.cardsArray;
    for (let i in this.heroes) {
      if (this.cardsArray[i] > 1) {
        console.log(this.heroes[i]);
        this.heroesRepetidos.push(this.heroes[i]);
      }
    }
    console.log(this.heroesRepetidos);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepetidosPage');
  }

}
