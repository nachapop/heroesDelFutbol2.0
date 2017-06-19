import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import {LoginService} from '../../services/login.service';
import {HeroesService, Heroe} from '../../services/heroes.service';
@Component({
  selector: 'page-cromos-nuevos',
  templateUrl: 'cromos-nuevos.html',
})
export class CromosNuevosPage {
  @ViewChild(Slides) slides: Slides;

  heroesNuevos: Heroe[] = [];
  constructor(private _lis: LoginService,
    private _hs: HeroesService) {
    for (let heroe in _hs.getHeroes()) {
      if (this._lis.newCardsArray[heroe] > 0)
        this.heroesNuevos.push(_hs.getHeroes()[this._lis.newCardsArray[heroe]]);
      console.log(this._lis.newCardsArray[heroe]);
    }
    console.log(this.heroesNuevos);
  }
  goToSlide() {
    this.slides.slideTo(2, 500);
  }

}
