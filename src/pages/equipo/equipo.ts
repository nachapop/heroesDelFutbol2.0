import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeroesService, Heroe } from '../../services/heroes.service';
import {LoginService} from '../../services/login.service';
@IonicPage()
@Component({
  selector: 'page-equipo',
  templateUrl: 'equipo.html',
})
export class EquipoPage {
  pais: string;
  heroes: Heroe[] = [];
  cardsArray: number[];
  jugadoresAfrica: number;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _heroesService: HeroesService,
    private _loginService: LoginService
  ) {
    this.cardsArray = this._loginService.cardsArray;
  
  }

  ngOnInit() {
    this.pais = this.navParams.get('pais');
    for (let heroe of this._heroesService.getHeroes()) {
      if (heroe.pais == this.pais) {
        this.heroes.push(heroe);
      }
    }
    console.log(this.heroes);
  }


}
