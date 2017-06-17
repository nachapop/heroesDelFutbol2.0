export class Usuario implements UsuarioInterface {
  constructor(
    public id: string,
    public nombre: string,
    public imagen: string,
    public token: string,
    public correo: string,
    public ultimaConexion: Date) {

  }
}

export interface UsuarioInterface {

  id: string;
  nombre: string;
  imagen: string;
  token: string;
  correo: string;
  ultimaConexion: Date;
}
