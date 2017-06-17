import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//database
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import {BuscarAmigosPage} from '../pages/amigos/buscar-amigos';
import {AmigosPage} from '../pages/amigos/amigos';
import {PaisesPage} from '../pages/paises/paises';
import {IntercambiosPage} from '../pages/intercambios/intercambios';

import {RepetidosPage} from '../pages/repetidos/repetidos';
import {LoginPage} from '../pages/login/login';
import {TabsPage} from '../pages/tabs/tabs';
import {CromosNuevosPage} from '../pages/cromos-nuevos/cromos-nuevos';
import {EquipoPage} from '../pages/equipo/equipo';


import {LoginService} from '../services/login.service';
import {PaisesService} from '../services/paises.service';
import {HeroesService} from '../services/heroes.service';
import {AmigosService} from '../services/amigos.service';

//Pipes
import {TieneCromoPipe} from '../pipes/tiene-cromo.pipe';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


//plug-ins
import { Facebook } from '@ionic-native/facebook';
import { KeysPipe } from '../pipes/keys/keys';
export const firebaseConfig = {
  apiKey: "AIzaSyDiRtjf5YU9Qee6_7_XZnZsEPFq3dnJYZs",
  authDomain: "heroesdelfutbol-dc20e.firebaseapp.com",
  databaseURL: "https://heroesdelfutbol-dc20e.firebaseio.com",
  projectId: "heroesdelfutbol-dc20e",
  storageBucket: "heroesdelfutbol-dc20e.appspot.com",
  messagingSenderId: "670769318517"
};
@NgModule({
  declarations: [
    TieneCromoPipe,
    MyApp,
    AmigosPage,
    PaisesPage,
    LoginPage,
    EquipoPage,
    BuscarAmigosPage,
    CromosNuevosPage,
    IntercambiosPage,
    RepetidosPage,
    TabsPage,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AmigosPage,
    PaisesPage,
    LoginPage,
    EquipoPage,
    BuscarAmigosPage,
    IntercambiosPage,
    RepetidosPage,
    TabsPage,
    CromosNuevosPage
  ],
  providers: [
    AmigosService,
    Facebook,
    HeroesService,
    PaisesService,
    LoginService,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
