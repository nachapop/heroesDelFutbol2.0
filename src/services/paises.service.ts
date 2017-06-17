import { Injectable } from '@angular/core';

@Injectable()
export class PaisesService {

  private paises: Pais[] = [
    {
      id: 0,
      nombre: "Africa",
      img: "assets/img/pais_africa.jpg",
      imgclick: "assets/img/pais_africa_click.jpg"
    },
    {
      id: 1,
      nombre: "Alemania",
      img: "assets/img/pais_alemania.jpg",
      imgclick: "assets/img/pais_alemania_click.jpg"
    },
    {
      id: 2,
      nombre: "America",
      img: "assets/img/pais_america.jpg",
      imgclick: "assets/img/pais_america_click.jpg"
    },
    {
      id: 3,
      nombre: "Argentina",
      img: "assets/img/pais_argentina.jpg",
      imgclick: "assets/img/pais_argentina_click.jpg"
    },
    {
      id: 4,
      nombre: "Brasil",
      img: "assets/img/pais_brasil.jpg",
      imgclick: "assets/img/pais_brasil_click.jpg"
    },
    {
      id: 5,
      nombre: "España",
      img: "assets/img/pais_espana.jpg",
      imgclick: "assets/img/pais_espana_click.jpg"
    },
    {
      id: 6,
      nombre: "Europa",
      img: "assets/img/pais_europa.jpg",
      imgclick: "assets/img/pais_europa_click.jpg"
    },
    {
      id: 7,
      nombre: "Francia",
      img: "assets/img/pais_francia.jpg",
      imgclick: "assets/img/pais_francia_click.jpg"
    },
    {
      id: 8,
      nombre: "Holanda",
      img: "assets/img/pais_holanda.jpg",
      imgclick: "assets/img/pais_holanda_click.jpg"
    },
    {
      id: 9,
      nombre: "Inglaterra",
      img: "assets/img/pais_inglaterra.jpg",
      imgclick: "assets/img/pais_inglaterra_click.jpg"
    },
    {
      id: 10,
      nombre: "Italia",
      img: "assets/img/pais_italia.jpg",
      imgclick: "assets/img/pais_italia_click.jpg"
    },
    {
      id: 11,
      nombre: "Portugal",
      img: "assets/img/pais_portugal.jpg",
      imgclick: "assets/img/pais_portugal_click.jpg"
    },
    {
      id: 12,
      nombre: "Uruguay",
      img: "assets/img/pais_uruguay.jpg",
      imgclick: "assets/img/pais_uruguay_click.jpg"
    },
  ];
  constructor() {
    console.log("servicio listo");
  }
  getPaises(): Pais[] {
    return this.paises;
  }
}
export interface Pais {
  id: number;
  nombre: string;
  img: string;
  imgclick: string
}
