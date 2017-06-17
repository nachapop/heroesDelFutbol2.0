import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController, LoadingController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { PaisesPage } from '../pages/paises/paises';
import { LoginPage } from '../pages/login/login';

import {LoginService} from '../services/login.service';
import * as firebase from 'firebase/app';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  loginPage: any = PaisesPage;
  paisesPage: any = PaisesPage;
  //implementamos view child porque cuando
  //app.component es llamado todavía no se pueden
  //cargar el NavController

  @ViewChild('nav') nav: NavController
  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    private _loginService: LoginService,
    public loadingCtrl: LoadingController) {

    this.rootPage = LoginPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  openPage(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
  logout() {
    this._loginService.logout();
    this._loginService.cardsArray = [];
    this.nav.setRoot(LoginPage);
    this.menuCtrl.close();
  }

}
