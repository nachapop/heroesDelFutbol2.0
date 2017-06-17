import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {
  private heroes: Heroe[] = [
    {
      id: 0,
      nombre: "Kameni",
      pais: "Africa",
      imgbody: "assets/img/africa_carlos_kameni_body.jpg",
      imgbodyblack: "assets/img/africa_carlos_kameni_body_back.jpg",
      img: "assets/img/africa_carlos_kameni.png",
      imgblack: "assets/img/africa_carlos_kameni_black.png"
    },
    {
      id: 1,
      nombre: "Kuffour",
      pais: "Africa",
      imgbody: "assets/img/africa_samuel_kuffour_body.jpg",
      imgbodyblack: "assets/img/africa_samuel_kuffour_body_back.jpg",
      img: "assets/img/africa_samuel_kuffour.png",
      imgblack: "assets/img/africa_samuel_kuffour_black.png"
    },
    {
      id: 2,
      nombre: "West",
      pais: "Africa",
      imgbody: "assets/img/africa_taribo_west_body.jpg",
      imgbodyblack: "assets/img/africa_taribo_west_body_back.jpg",
      img: "assets/img/africa_taribo_west.png",
      imgblack: "assets/img/africa_taribo_west_black.png"
    },
    {
      id: 3,
      nombre: "Gerami",
      pais: "Africa",
      imgbody: "assets/img/africa_gerami_njitap_body.jpg",
      imgbodyblack: "assets/img/africa_gerami_njitap_body_back.jpg",
      img: "assets/img/africa_gerami_njitap.png",
      imgblack: "assets/img/africa_gerami_njitap_black.png"
    },

    {
      id: 4,
      nombre: "Essien",
      pais: "Africa",
      imgbody: "assets/img/africa_michael_essien_body.jpg",
      imgbodyblack: "assets/img/africa_michael_essien_body_back.jpg",
      img: "assets/img/africa_michael_essien.png",
      imgblack: "assets/img/africa_michael_essien_black.png"
    },
    {
      id: 5,
      nombre: "Toure",
      pais: "Africa",
      imgbody: "assets/img/africa_yaya_toure_body.jpg",
      imgbodyblack: "assets/img/africa_yaya_toure_body_back.jpg",
      img: "assets/img/africa_yaya_toure.png",
      imgblack: "assets/img/africa_yaya_toure_black.png"
    },
    {
      id: 6,
      nombre: "Finidi",
      pais: "Africa",
      imgbody: "assets/img/africa_george_finidi_body.jpg",
      imgbodyblack: "assets/img/africa_george_finidi_body_back.jpg",
      img: "assets/img/africa_george_finidi.png",
      imgblack: "assets/img/africa_george_finidi_black.png"
    },
    {
      id: 7,
      nombre: "Okocha",
      pais: "Africa",
      imgbody: "assets/img/africa_augustine_okocha_body.jpg",
      imgbodyblack: "assets/img/africa_augustine_okocha_body_back.jpg",
      img: "assets/img/africa_augustine_okocha.png",
      imgblack: "assets/img/africa_augustine_okocha_black.png"

    },
    {
      id: 8,
      nombre: "Weah",
      pais: "Africa",
      imgbody: "assets/img/africa_george_weah_body.jpg",
      imgbodyblack: "assets/img/africa_george_weah_body_back.jpg",
      img: "assets/img/africa_george_weah.png",
      imgblack: "assets/img/africa_george_weah_black.png"
    },
    {
      id: 9,
      nombre: "Drogba",
      pais: "Africa",
      imgbody: "assets/img/africa_didier_drogba_body.jpg",
      imgbodyblack: "assets/img/africa_didier_drogba_body_back.jpg",
      img: "assets/img/africa_didier_drogba.png",
      imgblack: "assets/img/africa_didier_drogba_black.png"
    },
    {
      id: 10,
      nombre: "Eto'o",
      pais: "Africa",
      imgbody: "assets/img/africa_samuel_eto_body.jpg",
      imgbodyblack: "assets/img/africa_samuel_eto_body_back.jpg",
      img: "assets/img/africa_samuel_eto.png",
      imgblack: "assets/img/africa_samuel_eto_black.png"
    },
    {
      id: 11,
      nombre: "Beckenbauer",
      pais: "Alemania",
      imgbody: "assets/img/alemania_beckenbauer_body.jpg",
      imgbodyblack: "assets/img/alemania_beckenbauer_body_back.jpg",
      img: "assets/img/alemania_beckenbauer.png",
      imgblack: "assets/img/alemania_beckenbauer_black.png"
    },
    {
      id: 12,
      nombre: "Brehme",
      pais: "Alemania",
      imgbody: "assets/img/alemania_brehme_body.jpg",
      imgbodyblack: "assets/img/alemania_brehme_body_back.jpg",
      img: "assets/img/alemania_brehme.png",
      imgblack: "assets/img/alemania_brehme_black.png"
    },
    {
      id: 13,
      nombre: "Breitner",
      pais: "Alemania",
      imgbody: "assets/img/alemania_breitner_body.jpg",
      imgbodyblack: "assets/img/alemania_breitner_body_back.jpg",
      img: "assets/img/alemania_breitner.png",
      imgblack: "assets/img/alemania_breitner_black.png"
    },
    {
      id: 14,
      nombre: "Kahn",
      pais: "Alemania",
      imgbody: "assets/img/alemania_kahn_body.jpg",
      imgbodyblack: "assets/img/alemania_kahn_body_back.jpg",
      img: "assets/img/alemania_kahn.png",
      imgblack: "assets/img/alemania_kahn_black.png"
    },
    {
      id: 15,
      nombre: "Klinsmann",
      pais: "Alemania",
      imgbody: "assets/img/alemania_klinsmann_body.jpg",
      imgbodyblack: "assets/img/alemania_klinsmann_body_back.jpg",
      img: "assets/img/alemania_klinsmann.png",
      imgblack: "assets/img/alemania_klinsmann_black.png"
    },
    {
      id: 16,
      nombre: "Matthaus",
      pais: "Alemania",
      imgbody: "assets/img/alemania_matthaus_body.jpg",
      imgbodyblack: "assets/img/alemania_matthaus_body_back.jpg",
      img: "assets/img/alemania_matthaus.png",
      imgblack: "assets/img/alemania_matthaus_black.png"
    },
    {
      id: 17,
      nombre: "Mueller",
      pais: "Alemania",
      imgbody: "assets/img/alemania_mueller_body.jpg",
      imgbodyblack: "assets/img/alemania_mueller_body_back.jpg",
      img: "assets/img/alemania_mueller.png",
      imgblack: "assets/img/alemania_mueller_black.png"
    },
    {
      id: 18,
      nombre: "Rummenige",
      pais: "Alemania",
      imgbody: "assets/img/alemania_rummenige_body.jpg",
      imgbodyblack: "assets/img/alemania_rummenige_body_back.jpg",
      img: "assets/img/alemania_rummenige.png",
      imgblack: "assets/img/alemania_rummenige_black.png"
    },
    {
      id: 19,
      nombre: "Sammer",
      pais: "Alemania",
      imgbody: "assets/img/alemania_sammer_body.jpg",
      imgbodyblack: "assets/img/alemania_sammer_body_back.jpg",
      img: "assets/img/alemania_sammer.png",
      imgblack: "assets/img/alemania_sammer_black.png"
    },
    {
      id: 20,
      nombre: "Seeler",
      pais: "Alemania",
      imgbody: "assets/img/alemania_seeler_body.jpg",
      imgbodyblack: "assets/img/alemania_seeler_body_back.jpg",
      img: "assets/img/alemania_seeler.png",
      imgblack: "assets/img/alemania_seeler_black.png"
    },
    {
      id: 21,
      nombre: "Stielike",
      pais: "Alemania",
      imgbody: "assets/img/alemania_stielike_body.jpg",
      imgbodyblack: "assets/img/alemania_stielike_body_back.jpg",
      img: "assets/img/alemania_stielike.png",
      imgblack: "assets/img/alemania_stielike_black.png"
    },




    {
      id: 22,
      nombre: "Escobar",
      pais: "America",
      imgbody: "assets/img/america_andres_escobar_body.jpg",
      imgbodyblack: "assets/img/america_andres_escobar_body_back.jpg",
      img: "assets/img/america_andres_escobar.png",
      imgblack: "assets/img/america_andres_escobar_black.png"
    },
    {
      id: 23,
      nombre: "Vidal",
      pais: "America",
      imgbody: "assets/img/america_arturo_vidal_body.jpg",
      imgbodyblack: "assets/img/america_arturo_vidal_body_back.jpg",
      img: "assets/img/america_arturo_vidal.png",
      imgblack: "assets/img/america_arturo_vidal_black.png"
    },
    {
      id: 24,
      nombre: "Cuauhtemoc",
      pais: "America",
      imgbody: "assets/img/america_cuauhtemoc_body.jpg",
      imgbodyblack: "assets/img/america_cuauhtemoc_body_back.jpg",
      img: "assets/img/america_cuauhtemoc.png",
      imgblack: "assets/img/america_cuauhtemoc_black.png"
    },
    {
      id: 25,
      nombre: "Falcao",
      pais: "America",
      imgbody: "assets/img/america_falcao_body.jpg",
      imgbodyblack: "assets/img/america_falcao_body_back.jpg",
      img: "assets/img/america_falcao.png",
      imgblack: "assets/img/america_falcao_black.png"
    },
    {
      id: 26,
      nombre: "Higuita",
      pais: "America",
      imgbody: "assets/img/america_higuita_body.jpg",
      imgbodyblack: "assets/img/america_higuita_body_back.jpg",
      img: "assets/img/america_higuita.png",
      imgblack: "assets/img/america_higuita_black.png"
    },

    {
      id: 27,
      nombre: "Sanchez",
      pais: "America",
      imgbody: "assets/img/america_hugo_sanchez_body.jpg",
      imgbodyblack: "assets/img/america_hugo_sanchez_body_back.jpg",
      img: "assets/img/america_hugo_sanchez.png",
      imgblack: "assets/img/america_hugo_sanchez_black.png"
    },
    {
      id: 28,
      nombre: "Lalas",
      pais: "America",
      imgbody: "assets/img/america_lalas_body.jpg",
      imgbodyblack: "assets/img/america_lalas_body_back.jpg",
      img: "assets/img/america_lalas.png",
      imgblack: "assets/img/america_lalas_black.png"
    },
    {
      id: 29,
      nombre: "Gonzalez",
      pais: "America",
      imgbody: "assets/img/america_magico_gonzalez_body.jpg",
      imgbodyblack: "assets/img/america_magico_gonzalez_body_back.jpg",
      img: "assets/img/america_magico_gonzalez.png",
      imgblack: "assets/img/america_magico_gonzalez_black.png"
    },
    {
      id: 30,
      nombre: "Marques",
      pais: "America",
      imgbody: "assets/img/america_rafael_marques_body.jpg",
      imgbodyblack: "assets/img/america_rafael_marques_body_back.jpg",
      img: "assets/img/america_rafael_marques.png",
      imgblack: "assets/img/america_rafael_marques_black.png"
    },
    {
      id: 31,
      nombre: "Valderrama",
      pais: "America",
      imgbody: "assets/img/america_valderrama_body.jpg",
      imgbodyblack: "assets/img/america_valderrama_body_back.jpg",
      img: "assets/img/america_valderrama.png",
      imgblack: "assets/img/america_valderrama_black.png"
    },
    {
      id: 32,
      nombre: "Zamorano",
      pais: "America",
      imgbody: "assets/img/america_zamorano_body.jpg",
      imgbodyblack: "assets/img/america_zamorano_body_back.jpg",
      img: "assets/img/america_zamorano.png",
      imgblack: "assets/img/america_zamorano_black.png"
    },



    {
      id: 33,
      nombre: "Ardiles",
      pais: "Argentina",
      imgbody: "assets/img/argentina_ardiles_body.jpg",
      imgbodyblack: "assets/img/argentina_ardiles_body_back.jpg",
      img: "assets/img/argentina_ardiles.png",
      imgblack: "assets/img/argentina_ardiles_black.png"
    },
    {
      id: 34,
      nombre: "Batistuta",
      pais: "Argentina",
      imgbody: "assets/img/argentina_batistuta_body.jpg",
      imgbodyblack: "assets/img/argentina_batistuta_body_back.jpg",
      img: "assets/img/argentina_batistuta.png",
      imgblack: "assets/img/argentina_batistuta_black.png"
    },
    {
      id: 35,
      nombre: "Fillol",
      pais: "Argentina",
      imgbody: "assets/img/argentina_fillol_body.jpg",
      imgbodyblack: "assets/img/argentina_fillol_body_back.jpg",
      img: "assets/img/argentina_fillol.png",
      imgblack: "assets/img/argentina_fillol_black.png"
    },
    {
      id: 36,
      nombre: "Kempes",
      pais: "Argentina",
      imgbody: "assets/img/argentina_kempes_body.jpg",
      imgbodyblack: "assets/img/argentina_kempes_body_back.jpg",
      img: "assets/img/argentina_kempes.png",
      imgblack: "assets/img/argentina_kempes_black.png"
    },
    {
      id: 37,
      nombre: "Maradona",
      pais: "Argentina",
      imgbody: "assets/img/argentina_C_body.jpg",
      imgbodyblack: "assets/img/argentina_maradona_body_back.jpg",
      img: "assets/img/argentina_maradona.png",
      imgblack: "assets/img/argentina_maradona_black.png"
    },
    {
      id: 38,
      nombre: "Messi",
      pais: "Argentina",
      imgbody: "assets/img/argentina_messi_body.jpg",
      imgbodyblack: "assets/img/argentina_messi_body_back.jpg",
      img: "assets/img/argentina_messi.png",
      imgblack: "assets/img/argentina_messi_black.png"
    },
    {
      id: 39,
      nombre: "Pasarella",
      pais: "Argentina",
      imgbody: "assets/img/argentina_pasarella_body.jpg",
      imgbodyblack: "assets/img/argentina_pasarella_body_back.jpg",
      img: "assets/img/argentina_pasarella.png",
      imgblack: "assets/img/argentina_pasarella_black.png"
    },
    {
      id: 40,
      nombre: "Redondo",
      pais: "Argentina",
      imgbody: "assets/img/argentina_redondo_body.jpg",
      imgbodyblack: "assets/img/argentina_redondo_body_back.jpg",
      img: "assets/img/argentina_redondo.png",
      imgblack: "assets/img/argentina_redondo_black.png"
    },
    {
      id: 41,
      nombre: "Ruggeri",
      pais: "Argentina",
      imgbody: "assets/img/argentina_ruggeri_body.jpg",
      imgbodyblack: "assets/img/argentina_ruggeri_body_back.jpg",
      img: "assets/img/argentina_ruggeri.png",
      imgblack: "assets/img/argentina_ruggeri_black.png"
    },
    {
      id: 42,
      nombre: "Simeone",
      pais: "Argentina",
      imgbody: "assets/img/argentina_simeone_body.jpg",
      imgbodyblack: "assets/img/argentina_simeone_body_back.jpg",
      img: "assets/img/argentina_simeone.png",
      imgblack: "assets/img/argentina_simeone_black.png"
    },
    {
      id: 43,
      nombre: "Zanetti",
      pais: "Argentina",
      imgbody: "assets/img/argentina_zanetti_body.jpg",
      imgbodyblack: "assets/img/argentina_zanetti_body_back.jpg",
      img: "assets/img/argentina_zanetti.png",
      imgblack: "assets/img/argentina_zanetti_black.png"
    },





    {
      id: 44,
      nombre: "Garrincha",
      pais: "Brasil",
      imgbody: "assets/img/brasil_arrincha_body.jpg",
      imgbodyblack: "assets/img/brasil_arrincha_body_back.jpg",
      img: "assets/img/brasil_arrincha.png",
      imgblack: "assets/img/brasil_arrincha_black.png"
    },
    {
      id: 45,
      nombre: "Cafu",
      pais: "Brasil",
      imgbody: "assets/img/brasil_cafu_body.jpg",
      imgbodyblack: "assets/img/brasil_cafu_body_back.jpg",
      img: "assets/img/brasil_cafu.png",
      imgblack: "assets/img/brasil_cafu_black.png"
    },
    {
      id: 46,
      nombre: "Silva",
      pais: "Brasil",
      imgbody: "assets/img/brasil_mauro_silva_body.jpg",
      imgbodyblack: "assets/img/brasil_mauro_silva_body_back.jpg",
      img: "assets/img/brasil_mauro_silva.png",
      imgblack: "assets/img/brasil_mauro_silva_black.png"
    },
    {
      id: 47,
      nombre: "Pele",
      pais: "Brasil",
      imgbody: "assets/img/brasil_pele_body.jpg",
      imgbodyblack: "assets/img/brasil_pele_body_back.jpg",
      img: "assets/img/brasil_pele.png",
      imgblack: "assets/img/brasil_pele_black.png"
    },
    {
      id: 48,
      nombre: "Carlos",
      pais: "Brasil",
      imgbody: "assets/img/brasil_roberto_carlos_body.jpg",
      imgbodyblack: "assets/img/brasil_roberto_carlos_body_back.jpg",
      img: "assets/img/brasil_roberto_carlos.png",
      imgblack: "assets/img/brasil_roberto_carlos_black.png"
    },
    {
      id: 49,
      nombre: "Ronaldinho",
      pais: "Brasil",
      imgbody: "assets/img/brasil_ronaldinho_body.jpg",
      imgbodyblack: "assets/img/brasil_ronaldinho_body_back.jpg",
      img: "assets/img/brasil_ronaldinho.png",
      imgblack: "assets/img/brasil_ronaldinho_black.png"
    },
    {
      id: 50,
      nombre: "Ronaldo",
      pais: "Brasil",
      imgbody: "assets/img/brasil_ronaldo_body.jpg",
      imgbodyblack: "assets/img/brasil_ronaldo_body_back.jpg",
      img: "assets/img/brasil_ronaldo.png",
      imgblack: "assets/img/brasil_ronaldo_black.png"
    },
    {
      id: 51,
      nombre: "Socrates",
      pais: "Brasil",
      imgbody: "assets/img/brasil_socrates_body.jpg",
      imgbodyblack: "assets/img/brasil_socrates_body_back.jpg",
      img: "assets/img/brasil_socrates.png",
      imgblack: "assets/img/brasil_socrates_black.png"
    },
    {
      id: 52,
      nombre: "Taffarel",
      pais: "Brasil",
      imgbody: "assets/img/brasil_taffare_body.jpg",
      imgbodyblack: "assets/img/brasil_taffare_body_back.jpg",
      img: "assets/img/brasil_taffare.png",
      imgblack: "assets/img/brasil_taffare_black.png"
    },
    {
      id: 53,
      nombre: "Zico",
      pais: "Brasil",
      imgbody: "assets/img/brasil_zico_body.jpg",
      imgbodyblack: "assets/img/brasil_zico_body_back.jpg",
      img: "assets/img/brasil_zico.png",
      imgblack: "assets/img/brasil_zico_black.png"
    },



    {
      id: 54,
      nombre: "Casillas",
      pais: "España",
      imgbody: "assets/img/espana_casillas_body.jpg",
      imgbodyblack: "assets/img/espana_casillas_body_back.jpg",
      img: "assets/img/espana_casillas.png",
      imgblack: "assets/img/espana_casillas_black.png"
    },
    {
      id: 55,
      nombre: "Gordillo",
      pais: "España",
      imgbody: "assets/img/espana_gordillo_body.jpg",
      imgbodyblack: "assets/img/espana_gordillo_body_back.jpg",
      img: "assets/img/espana_gordillo.png",
      imgblack: "assets/img/espana_gordillo_black.png"
    },
    {
      id: 56,
      nombre: "Guardiola",
      pais: "España",
      imgbody: "assets/img/espana_guardiola_body.jpg",
      imgbodyblack: "assets/img/espana_guardiola_body_back.jpg",
      img: "assets/img/espana_guardiola.png",
      imgblack: "assets/img/espana_guardiola_black.png"
    },
    {
      id: 57,
      nombre: "Hierro",
      pais: "España",
      imgbody: "assets/img/espana_hierro_body.jpg",
      imgbodyblack: "assets/img/espana_hierro_body_back.jpg",
      img: "assets/img/espana_hierro.png",
      imgblack: "assets/img/espana_hierro_black.png"
    },
    {
      id: 58,
      nombre: "Iniesta",
      pais: "España",
      imgbody: "assets/img/espana_iniesta_body.jpg",
      imgbodyblack: "assets/img/espana_iniesta_body_back.jpg",
      img: "assets/img/espana_iniesta.png",
      imgblack: "assets/img/espana_iniesta_black.png"
    },
    {
      id: 59,
      nombre: "Suarez",
      pais: "España",
      imgbody: "assets/img/espana_luis_suarez_body.jpg",
      imgbodyblack: "assets/img/espana_luis_suarez_body_back.jpg",
      img: "assets/img/espana_luis_suarez.png",
      imgblack: "assets/img/espana_luis_suarez_black.png"
    },
    {
      id: 60,
      nombre: "Puyol",
      pais: "España",
      imgbody: "assets/img/espana_puyol_body.jpg",
      imgbodyblack: "assets/img/espana_puyol_body_back.jpg",
      img: "assets/img/espana_puyol.png",
      imgblack: "assets/img/espana_puyol_black.png"
    },
    {
      id: 61,
      nombre: "Raul",
      pais: "España",
      imgbody: "assets/img/espana_raul_body.jpg",
      imgbodyblack: "assets/img/espana_raul_body_back.jpg",
      img: "assets/img/espana_raul.png",
      imgblack: "assets/img/espana_raul_black.png"
    },
    {
      id: 62,
      nombre: "Ramos",
      pais: "España",
      imgbody: "assets/img/espana_sergio_ramos_body.jpg",
      imgbodyblack: "assets/img/espana_sergio_ramos_body_back.jpg",
      img: "assets/img/espana_sergio_ramos.png",
      imgblack: "assets/img/espana_sergio_ramos_black.png"
    },
    {
      id: 63,
      nombre: "Villa",
      pais: "España",
      imgbody: "assets/img/espana_villa_body.jpg",
      imgbodyblack: "assets/img/espana_villa_body_back.jpg",
      img: "assets/img/espana_villa.png",
      imgblack: "assets/img/espana_villa_black.png"
    },
    {
      id: 64,
      nombre: "Xavi",
      pais: "España",
      imgbody: "assets/img/espana_xavi_body.jpg",
      imgbodyblack: "assets/img/espana_xavi_body_back.jpg",
      img: "assets/img/espana_xavi.png",
      imgblack: "assets/img/espana_xavi_black.png"
    },



    {
      id: 65,
      nombre: "Bale",
      pais: "Europa",
      imgbody: "assets/img/europa_bale_body.jpg",
      imgbodyblack: "assets/img/europa_bale_body_back.jpg",
      img: "assets/img/europa_bale.png",
      imgblack: "assets/img/europa_bale_black.png"
    },
    {
      id: 66,
      nombre: "Best",
      pais: "Europa",
      imgbody: "assets/img/europa_george_best_body.jpg",
      imgbodyblack: "assets/img/europa_george_best_body_back.jpg",
      img: "assets/img/europa_george_best.png",
      imgblack: "assets/img/europa_george_best_black.png"
    },
    {
      id: 67,
      nombre: "Ibrahimovic",
      pais: "Europa",
      imgbody: "assets/img/europa_ibrahimovic_body.jpg",
      imgbodyblack: "assets/img/europa_ibrahimovic_body_back.jpg",
      img: "assets/img/europa_ibrahimovic.png",
      imgblack: "assets/img/europa_ibrahimovic_black.png"
    },
    {
      id: 68,
      nombre: "Kompany",
      pais: "Europa",
      imgbody: "assets/img/europa_kompany_body.jpg",
      imgbodyblack: "assets/img/europa_kompany_body_back.jpg",
      img: "assets/img/europa_kompany.png",
      imgblack: "assets/img/europa_kompany_black.png"
    },
    {
      id: 69,
      nombre: "Yashin",
      pais: "Europa",
      imgbody: "assets/img/europa_lev_yashin_body.jpg",
      imgbodyblack: "assets/img/europa_lev_yashin_body_back.jpg",
      img: "assets/img/europa_lev_yashin.png",
      imgblack: "assets/img/europa_lev_yashin_black.png"
    },
    {
      id: 70,
      nombre: "Laudrup",
      pais: "Europa",
      imgbody: "assets/img/europa_michael_laudrup_body.jpg",
      imgbodyblack: "assets/img/europa_michael_laudrup_body_back.jpg",
      img: "assets/img/europa_michael_laudrup.png",
      imgblack: "assets/img/europa_michael_laudrup_black.png"
    },
    {
      id: 71,
      nombre: "Nedved",
      pais: "Europa",
      imgbody: "assets/img/europa_nedved_body.jpg",
      imgbodyblack: "assets/img/europa_nedved_body_back.jpg",
      img: "assets/img/europa_nedved.png",
      imgblack: "assets/img/europa_nedved_black.png"
    },
    {
      id: 72,
      nombre: "Popescu",
      pais: "Europa",
      imgbody: "assets/img/europa_popescu_body.jpg",
      imgbodyblack: "assets/img/europa_popescu_body_back.jpg",
      img: "assets/img/europa_popescu.png",
      imgblack: "assets/img/europa_popescu_black.png"
    },
    {
      id: 73,
      nombre: "Puskas",
      pais: "Europa",
      imgbody: "assets/img/europa_puskas_body.jpg",
      imgbodyblack: "assets/img/europa_puskas_body_back.jpg",
      img: "assets/img/europa_puskas.png",
      imgblack: "assets/img/europa_puskas_black.png"
    },
    {
      id: 74,
      nombre: "Giggs",
      pais: "Europa",
      imgbody: "assets/img/europa_ryan_giggs_body.jpg",
      imgbodyblack: "assets/img/europa_ryan_giggs_body_back.jpg",
      img: "assets/img/europa_ryan_giggs.png",
      imgblack: "assets/img/europa_ryan_giggs_black.png"
    },
    {
      id: 75,
      nombre: "Stoichkov",
      pais: "Europa",
      imgbody: "assets/img/europa_toichkov_body.jpg",
      imgbodyblack: "assets/img/europa_toichkov_body_back.jpg",
      img: "assets/img/europa_toichkov.png",
      imgblack: "assets/img/europa_toichkov_black.png"
    },

    {
      id: 76,
      nombre: "Barthez",
      pais: "Francia",
      imgbody: "assets/img/francia_barthez_body.jpg",
      imgbodyblack: "assets/img/francia_barthez_body_back.jpg",
      img: "assets/img/francia_barthez.png",
      imgblack: "assets/img/francia_barthez_black.png"
    },
    {
      id: 77,
      nombre: "Blanc",
      pais: "Francia",
      imgbody: "assets/img/francia_blanc_body.jpg",
      imgbodyblack: "assets/img/francia_blanc_body_back.jpg",
      img: "assets/img/francia_blanc.png",
      imgblack: "assets/img/francia_blanc_black.png"
    },
    {
      id: 78,
      nombre: "Cantona",
      pais: "Francia",
      imgbody: "assets/img/francia_cantona_body.jpg",
      imgbodyblack: "assets/img/francia_cantona_body_back.jpg",
      img: "assets/img/francia_cantona.png",
      imgblack: "assets/img/francia_cantona_black.png"
    },
    {
      id: 79,
      nombre: "Desailly",
      pais: "Francia",
      imgbody: "assets/img/francia_desailly_body.jpg",
      imgbodyblack: "assets/img/francia_desailly_body_back.jpg",
      img: "assets/img/francia_desailly.png",
      imgblack: "assets/img/francia_desailly_black.png"
    },
    {
      id: 80,
      nombre: "Henry",
      pais: "Francia",
      imgbody: "assets/img/francia_henry_body.jpg",
      imgbodyblack: "assets/img/francia_henry_body_back.jpg",
      img: "assets/img/francia_henry.png",
      imgblack: "assets/img/francia_henry_black.png"
    },
    {
      id: 81,
      nombre: "Kopa",
      pais: "Francia",
      imgbody: "assets/img/francia_kopa_body.jpg",
      imgbodyblack: "assets/img/francia_kopa_body_back.jpg",
      img: "assets/img/francia_kopa.png",
      imgblack: "assets/img/francia_kopa_black.png"
    },
    {
      id: 82,
      nombre: "Platini",
      pais: "Francia",
      imgbody: "assets/img/francia_platini_body.jpg",
      imgbodyblack: "assets/img/francia_platini_body_back.jpg",
      img: "assets/img/francia_platini.png",
      imgblack: "assets/img/francia_platini_black.png"
    },
    {
      id: 83,
      nombre: "Thuram",
      pais: "Francia",
      imgbody: "assets/img/francia_thuram_body.jpg",
      imgbodyblack: "assets/img/francia_thuram_body_back.jpg",
      img: "assets/img/francia_thuram.png",
      imgblack: "assets/img/francia_thuram_black.png"
    },
    {
      id: 84,
      nombre: "Tigana",
      pais: "Francia",
      imgbody: "assets/img/francia_tigana_body.jpg",
      imgbodyblack: "assets/img/francia_tigana_body_back.jpg",
      img: "assets/img/francia_tigana.png",
      imgblack: "assets/img/francia_tigana_black.png"
    },
    {
      id: 85,
      nombre: "Vieira",
      pais: "Francia",
      imgbody: "assets/img/francia_vieira_body.jpg",
      imgbodyblack: "assets/img/francia_vieira_body_back.jpg",
      img: "assets/img/francia_vieira.png",
      imgblack: "assets/img/francia_vieira_black.png"
    },
    {
      id: 86,
      nombre: "Zidane",
      pais: "Francia",
      imgbody: "assets/img/francia_zidane_body.jpg",
      imgbodyblack: "assets/img/francia_zidane_body_back.jpg",
      img: "assets/img/francia_zidane.png",
      imgblack: "assets/img/francia_zidane_black.png"
    },


    {
      id: 87,
      nombre: "Bergkamp",
      pais: "Holanda",
      imgbody: "assets/img/holanda_bergkamp_body.jpg",
      imgbodyblack: "assets/img/holanda_bergkamp_body_back.jpg",
      img: "assets/img/holanda_bergkamp.png",
      imgblack: "assets/img/holanda_bergkamp_black.png"
    },
    {
      id: 88,
      nombre: "Cruyff",
      pais: "Holanda",
      imgbody: "assets/img/holanda_cruyff_body.jpg",
      imgbodyblack: "assets/img/holanda_cruyff_body_back.jpg",
      img: "assets/img/holanda_cruyff.png",
      imgblack: "assets/img/holanda_cruyff_black.png"
    },
    {
      id: 89,
      nombre: "Davids",
      pais: "Holanda",
      imgbody: "assets/img/holanda_davids_body.jpg",
      imgbodyblack: "assets/img/holanda_davids_body_back.jpg",
      img: "assets/img/holanda_davids.png",
      imgblack: "assets/img/holanda_davids_black.png"
    },
    {
      id: 90,
      nombre: "De Boer",
      pais: "Holanda",
      imgbody: "assets/img/holanda_frank_de_boer_body.jpg",
      imgbodyblack: "assets/img/holanda_frank_de_boer_body_back.jpg",
      img: "assets/img/holanda_frank_de_boer.png",
      imgblack: "assets/img/holanda_frank_de_boer_black.png"
    },
    {
      id: 91,
      nombre: "Gullit",
      pais: "Holanda",
      imgbody: "assets/img/holanda_gullit_body.jpg",
      imgbodyblack: "assets/img/holanda_gullit_body_back.jpg",
      img: "assets/img/holanda_gullit.png",
      imgblack: "assets/img/holanda_gullit_black.png"
    },
    {
      id: 92,
      nombre: "Koeman",
      pais: "Holanda",
      imgbody: "assets/img/holanda_koeman_body.jpg",
      imgbodyblack: "assets/img/holanda_koeman_body_back.jpg",
      img: "assets/img/holanda_koeman.png",
      imgblack: "assets/img/holanda_koeman_black.png"
    },
    {
      id: 93,
      nombre: "Neeskens",
      pais: "Holanda",
      imgbody: "assets/img/holanda_neeskens_body.jpg",
      imgbodyblack: "assets/img/holanda_neeskens_body_back.jpg",
      img: "assets/img/holanda_neeskens.png",
      imgblack: "assets/img/holanda_neeskens_black.png"
    },
    {
      id: 94,
      nombre: "Rijkaard",
      pais: "Holanda",
      imgbody: "assets/img/holanda_rijkaard_body.jpg",
      imgbodyblack: "assets/img/holanda_rijkaard_body_back.jpg",
      img: "assets/img/holanda_rijkaard.png",
      imgblack: "assets/img/holanda_rijkaard_black.png"
    },
    {
      id: 95,
      nombre: "Robben",
      pais: "Holanda",
      imgbody: "assets/img/holanda_robben_body.jpg",
      imgbodyblack: "assets/img/holanda_robben_body_back.jpg",
      img: "assets/img/holanda_robben.png",
      imgblack: "assets/img/holanda_robben_black.png"
    },
    {
      id: 96,
      nombre: "Van Basten",
      pais: "Holanda",
      imgbody: "assets/img/holanda_van_basten_body.jpg",
      imgbodyblack: "assets/img/holanda_van_basten_body_back.jpg",
      img: "assets/img/holanda_van_basten.png",
      imgblack: "assets/img/holanda_van_basten_black.png"
    },
    {
      id: 97,
      nombre: "Van Der Sar",
      pais: "Holanda",
      imgbody: "assets/img/holanda_van_der_sar_body.jpg",
      imgbodyblack: "assets/img/holanda_van_der_sar_body_back.jpg",
      img: "assets/img/holanda_van_der_sar.png",
      imgblack: "assets/img/holanda_van_der_sar_black.png"
    },


    {
      id: 98,
      nombre: "Shearer",
      pais: "Inglaterra",
      imgbody: "assets/img/inglaterra_alan_shearer_body.jpg",
      imgbodyblack: "assets/img/inglaterra_alan_shearer_body_back.jpg",
      img: "assets/img/inglaterra_alan_shearer.png",
      imgblack: "assets/img/inglaterra_alan_shearer_black.png"
    },
    {
      id: 99,
      nombre: "Banks",
      pais: "Inglaterra",
      imgbody: "assets/img/inglaterra_banks_body.jpg",
      imgbodyblack: "assets/img/inglaterra_banks_body_back.jpg",
      img: "assets/img/inglaterra_banks.png",
      imgblack: "assets/img/inglaterra_banks_black.png"
    },
    {
      id: 100,
      nombre: "Barnes",
      pais: "Inglaterra",
      imgbody: "assets/img/inglaterra_barnes_body.jpg",
      imgbodyblack: "assets/img/inglaterra_barnes_body_back.jpg",
      img: "assets/img/inglaterra_barnes.png",
      imgblack: "assets/img/inglaterra_barnes_black.png"
    },
    {
      id: 101,
      nombre: "Beckham",
      pais: "Inglaterra",
      imgbody: "assets/img/inglaterra_beckham_body.jpg",
      imgbodyblack: "assets/img/inglaterra_beckham_body_back.jpg",
      img: "assets/img/inglaterra_beckham.png",
      imgblack: "assets/img/inglaterra_beckham_black.png"
    },
    {
      id: 102,
      nombre: "Charlton",
      pais: "Inglaterra",
      imgbody: "assets/img/inglaterra_bobby_charlton_body.jpg",
      imgbodyblack: "assets/img/inglaterra_bobby_charlton_body_back.jpg",
      img: "assets/img/inglaterra_bobby_charlton.png",
      imgblack: "assets/img/inglaterra_bobby_charlton_black.png"
    },
    {
      id: 103,
      nombre: "Gascoigne",
      pais: "Inglaterra",
      imgbody: "assets/img/inglaterra_gascoigne.jpg",
      imgbodyblack: "assets/img/inglaterra_gascoigne_back.jpg",
      img: "assets/img/inglaterra_gascoigne.png",
      imgblack: "assets/img/inglaterra_gascoignek.png"
    },
    {
      id: 104,
      nombre: "Gerard",
      pais: "Inglaterra",
      imgbody: "assets/img/inglaterra_gerard_body.jpg",
      imgbodyblack: "assets/img/inglaterra_gerard_back.jpg",
      img: "assets/img/inglaterra_gerard.png",
      imgblack: "assets/img/inglaterra_gerard_black.png"
    },
    {
      id: 105,
      nombre: "Lampard",
      pais: "Inglaterra",
      imgbody: "assets/img/inglaterra_lampard_body.jpg",
      imgbodyblack: "assets/img/inglaterra_lampard_body_back.jpg",
      img: "assets/img/inglaterra_lampard.png",
      imgblack: "assets/img/inglaterra_lampard_black.png"
    },
    {
      id: 106,
      nombre: "Lineker",
      pais: "Inglaterra",
      imgbody: "assets/img/inglaterra_lineker_body.jpg",
      imgbodyblack: "assets/img/inglaterra_lineker_body_back.jpg",
      img: "assets/img/inglaterra_lineker.png",
      imgblack: "assets/img/inglaterra_lineker_black.png"
    },
    {
      id: 107,
      nombre: "Moore",
      pais: "Inglaterra",
      imgbody: "assets/img/inglaterra_moore_body.jpg",
      imgbodyblack: "assets/img/inglaterra_moore_body_back.jpg",
      img: "assets/img/inglaterra_moore.png",
      imgblack: "assets/img/inglaterra_moore_black.png"
    },
    {
      id: 108,
      nombre: "Terry",
      pais: "Inglaterra",
      imgbody: "assets/img/inglaterra_terry_body.jpg",
      imgbodyblack: "assets/img/inglaterra_terry_body_back.jpg",
      img: "assets/img/inglaterra_terry.png",
      imgblack: "assets/img/inglaterra_terry_black.png"
    },


    {
      id: 109,
      nombre: "Baggio",
      pais: "Italia",
      imgbody: "assets/img/italia_baggio_body.jpg",
      imgbodyblack: "assets/img/italia_baggio_body_back.jpg",
      img: "assets/img/italia_baggio.png",
      imgblack: "assets/img/italia_baggio_black.png"
    },
    {
      id: 110,
      nombre: "Baresi",
      pais: "Italia",
      imgbody: "assets/img/italia_baresi_body.jpg",
      imgbodyblack: "assets/img/italia_baresi_body_back.jpg",
      img: "assets/img/italia_baresi.png",
      imgblack: "assets/img/italia_baresi_black.png"
    },
    {
      id: 111,
      nombre: "Buffon",
      pais: "Italia",
      imgbody: "assets/img/italia_buffon_body.jpg",
      imgbodyblack: "assets/img/italia_buffon_body_back.jpg",
      img: "assets/img/italia_buffon.png",
      imgblack: "assets/img/italia_buffon_black.png"
    },
    {
      id: 112,
      nombre: "Cannavaro",
      pais: "Italia",
      imgbody: "assets/img/italia_cannavaro_body.jpg",
      imgbodyblack: "assets/img/italia_cannavaro_body_back.jpg",
      img: "assets/img/italia_cannavaro.png",
      imgblack: "assets/img/italia_cannavaro_black.png"
    },
    {
      id: 113,
      nombre: "Gentile",
      pais: "Italia",
      imgbody: "assets/img/italia_gentile_body.jpg",
      imgbodyblack: "assets/img/italia_gentile_body_back.jpg",
      img: "assets/img/italia_gentile.png",
      imgblack: "assets/img/italia_gentile_black.png"
    },
    {
      id: 114,
      nombre: "Maldini",
      pais: "Italia",
      imgbody: "assets/img/italia_maldini_body.jpg",
      imgbodyblack: "assets/img/italia_maldini_body_back.jpg",
      img: "assets/img/italia_maldini.png",
      imgblack: "assets/img/italia_maldini_black.png"
    },
    {
      id: 115,
      nombre: "Meazza",
      pais: "Italia",
      imgbody: "assets/img/italia_meazza_body.jpg",
      imgbodyblack: "assets/img/italia_meazza_body_back.jpg",
      img: "assets/img/italia_meazza.png",
      imgblack: "assets/img/italia_meazza_black.png"
    },
    {
      id: 116,
      nombre: "Pirlo",
      pais: "Italia",
      imgbody: "assets/img/italia_pirlo_body.jpg",
      imgbodyblack: "assets/img/italia_pirlo_body_back.jpg",
      img: "assets/img/italia_pirlo.png",
      imgblack: "assets/img/italia_pirlo_black.png"
    },
    {
      id: 117,
      nombre: "Riva",
      pais: "Italia",
      imgbody: "assets/img/italia_riva_body.jpg",
      imgbodyblack: "assets/img/italia_riva_body_back.jpg",
      img: "assets/img/italia_riva.png",
      imgblack: "assets/img/italia_riva_black.png"
    },
    {
      id: 118,
      nombre: "Rivera",
      pais: "Italia",
      imgbody: "assets/img/italia_rivera_body.jpg",
      imgbodyblack: "assets/img/italia_rivera_body_back.jpg",
      img: "assets/img/italia_rivera.png",
      imgblack: "assets/img/italia_rivera_black.png"
    },
    {
      id: 119,
      nombre: "Rossi",
      pais: "Italia",
      imgbody: "assets/img/italia_rossi_body.jpg",
      imgbodyblack: "assets/img/italia_rossi_body_back.jpg",
      img: "assets/img/italia_rossi.png",
      imgblack: "assets/img/italia_rossi_black.png"
    },


    {
      id: 120,
      nombre: "Carvalho",
      pais: "Portugal",
      imgbody: "assets/img/portugal_carvalho_body.jpg",
      imgbodyblack: "assets/img/portugal_carvalho_body_back.jpg",
      img: "assets/img/portugal_carvalho.jpg",
      imgblack: "assets/img/portugal_carvalho_black.jpg"
    },
    {
      id: 121,
      nombre: "Couto",
      pais: "Portugal",
      imgbody: "assets/img/portugal_couto_body.jpg",
      imgbodyblack: "assets/img/portugal_couto_body_back.jpg",
      img: "assets/img/portugal_couto.jpg",
      imgblack: "assets/img/portugal_couto_black.jpg"
    },
    {
      id: 122,
      nombre: "Deco",
      pais: "Portugal",
      imgbody: "assets/img/portugal_deco_body.jpg",
      imgbodyblack: "assets/img/portugal_deco_body_back.jpg",
      img: "assets/img/portugal_deco.jpg",
      imgblack: "assets/img/portugal_deco_black.jpg"
    },
    {
      id: 123,
      nombre: "Eusebio",
      pais: "Portugal",
      imgbody: "assets/img/portugal_eusebio_body.jpg",
      imgbodyblack: "assets/img/portugal_eusebio_body_back.jpg",
      img: "assets/img/portugal_eusebio.jpg",
      imgblack: "assets/img/portugal_eusebio_black.jpg"
    },

    {
      id: 124,
      nombre: "Figo",
      pais: "Portugal",
      imgbody: "assets/img/portugal_figo_body.jpg",
      imgbodyblack: "assets/img/portugal_figo_body_back.jpg",
      img: "assets/img/portugal_figo.jpg",
      imgblack: "assets/img/portugal_figo_black.jpg"
    },
    {
      id: 125,
      nombre: "Futre",
      pais: "Portugal",
      imgbody: "assets/img/portugal_futre_body.jpg",
      imgbodyblack: "assets/img/portugal_futre_body_back.jpg",
      img: "assets/img/portugal_futre.jpg",
      imgblack: "assets/img/portugal_futre_black.jpg"
    },
    {
      id: 126,
      nombre: "Pauleta",
      pais: "Portugal",
      imgbody: "assets/img/portugal_pauleta_body.jpg",
      imgbodyblack: "assets/img/portugal_pauleta_body_back.jpg",
      img: "assets/img/portugal_pauleta.jpg",
      imgblack: "assets/img/portugal_pauleta_black.jpg"
    },
    {
      id: 127,
      nombre: "Pepe",
      pais: "Portugal",
      imgbody: "assets/img/portugal_pepe_body.jpg",
      imgbodyblack: "assets/img/portugal_pepe_body_back.jpg",
      img: "assets/img/portugal_pepe.jpg",
      imgblack: "assets/img/portugal_pepe_black.jpg"
    },
    {
      id: 128,
      nombre: "Ronaldo",
      pais: "Portugal",
      imgbody: "assets/img/portugal_ronaldo_body.jpg",
      imgbodyblack: "assets/img/portugal_ronaldo_body_back.jpg",
      img: "assets/img/portugal_ronaldo.jpg",
      imgblack: "assets/img/portugal_ronaldo_black.jpg"
    },
    {
      id: 129,
      nombre: "Rui Costa",
      pais: "Portugal",
      imgbody: "assets/img/portugal_rui_costa_body.jpg",
      imgbodyblack: "assets/img/portugal_rui_costa_body_back.jpg",
      img: "assets/img/portugal_rui_costa.jpg",
      imgblack: "assets/img/portugal_rui_costa_black.jpg"
    },
    {
      id: 130,
      nombre: "Vitor Baia",
      pais: "Portugal",
      imgbody: "assets/img/portugal_vitor_baia_body.jpg",
      imgbodyblack: "assets/img/portugal_vitor_baia_body_back.jpg",
      img: "assets/img/portugal_vitor_baia.jpg",
      imgblack: "assets/img/portugal_vitor_baia_black.jpg"
    },



    {
      id: 131,
      nombre: "Forlan",
      pais: "Uruguay",
      imgbody: "assets/img/uruguay_forlan_body.jpg",
      imgbodyblack: "assets/img/uruguay_forlan_body_back.jpg",
      img: "assets/img/uruguay_forlan.png",
      imgblack: "assets/img/uruguay_forlan_black.png"
    },
    {
      id: 132,
      nombre: "Francescoli",
      pais: "Uruguay",
      imgbody: "assets/img/uruguay_francescoli_body.jpg",
      imgbodyblack: "assets/img/uruguay_francescoli_body_back.jpg",
      img: "assets/img/uruguay_francescoli.png",
      imgblack: "assets/img/uruguay_francescoli_black.png"
    },
    {
      id: 133,
      nombre: "Godin",
      pais: "Uruguay",
      imgbody: "assets/img/uruguay_godin_body.jpg",
      imgbodyblack: "assets/img/uruguay_godin_body_back.jpg",
      img: "assets/img/uruguay_godin.png",
      imgblack: "assets/img/uruguay_godin_black.png"
    },
    {
      id: 134,
      nombre: "Suarez",
      pais: "Uruguay",
      imgbody: "assets/img/uruguay_luis_suarez_body.jpg",
      imgbodyblack: "assets/img/uruguay_luis_suarez_body_back.jpg",
      img: "assets/img/uruguay_luis_suarez.png",
      imgblack: "assets/img/uruguay_luis_suarez_black.png"
    },
    {
      id: 135,
      nombre: "Mazurkiewickz",
      pais: "Uruguay",
      imgbody: "assets/img/uruguay_mazurkiewicz_body.jpg",
      imgbodyblack: "assets/img/uruguay_mazurkiewicz_body_back.jpg",
      img: "assets/img/uruguay_mazurkiewicz.png",
      imgblack: "assets/img/uruguay_mazurkiewicz_black.png"
    },
    {
      id: 136,
      nombre: "Montero",
      pais: "Uruguay",
      imgbody: "assets/img/uruguay_montero_body.jpg",
      imgbodyblack: "assets/img/uruguay_montero_body_back.jpg",
      img: "assets/img/uruguay_montero.png",
      imgblack: "assets/img/uruguay_montero_black.png"
    },
    {
      id: 137,
      nombre: "Pereyra",
      pais: "Uruguay",
      imgbody: "assets/img/uruguay_pereyra_body.jpg",
      imgbodyblack: "assets/img/uruguay_pereyra_body_back.jpg",
      img: "assets/img/uruguay_pereyra.png",
      imgblack: "assets/img/uruguay_pereyra_black.png"
    },
    {
      id: 138,
      nombre: "Recoba",
      pais: "Uruguay",
      imgbody: "assets/img/uruguay_recoba_body.jpg",
      imgbodyblack: "assets/img/uruguay_recoba_body_back.jpg",
      img: "assets/img/uruguay_recoba.png",
      imgblack: "assets/img/uruguay_recoba_black.png"
    },
    {
      id: 139,
      nombre: "Scarone",
      pais: "Uruguay",
      imgbody: "assets/img/uruguay_scarone_body.jpg",
      imgbodyblack: "assets/img/uruguay_scarone_body_back.jpg",
      img: "assets/img/uruguay_scarone.png",
      imgblack: "assets/img/uruguay_scarone_black.png"
    },
    {
      id: 140,
      nombre: "Schiaffino",
      pais: "Uruguay",
      imgbody: "assets/img/uruguay_schiaffino_body.jpg",
      imgbodyblack: "assets/img/uruguay_schiaffino_body_back.jpg",
      img: "assets/img/uruguay_schiaffino.png",
      imgblack: "assets/img/uruguay_schiaffino_black.png"
    },
    {
      id: 141,
      nombre: "Varela",
      pais: "Uruguay",
      imgbody: "assets/img/uruguay_varela_body.jpg",
      imgbodyblack: "assets/img/uruguay_varela_body_back.jpg",
      img: "assets/img/uruguay_varela.png",
      imgblack: "assets/img/uruguay_varela_black.png"
    },
  ];
  constructor() { }
  getHeroes(): Heroe[] {
    return this.heroes;
  }
}
export interface Heroe {
  id: number;
  nombre: string;
  pais: string;
  imgbody: string;
  imgbodyblack: string;
  img: string;
  imgblack: string;
  numerodecromos?: number;
}
