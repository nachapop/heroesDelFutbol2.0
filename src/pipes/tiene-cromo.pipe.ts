import { Pipe, PipeTransform } from '@angular/core';
import {LoginService} from '../services/login.service';
@Pipe({
  name: 'tienecromo'
})
export class TieneCromoPipe implements PipeTransform {
  constructor(private _loginService: LoginService) {

  }
  transform(value: string, id: number, pagina: string): string {
    if (this._loginService.cardsArray[id] > 0) {
      return value;
    }
    if (pagina === 'equipo')
      return "assets/img/uruguay_luis_suarez_black.png";
    return "assets/img/uruguay_luis_suarez_body_back.png";
  }
}
