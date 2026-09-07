export class ErrorTelefonoApagado extends Error {

  private readonly mensaje: string;

  public constructor(modelo: string) {
    super();
    this.mensaje = `No se puede llamar: el celular ${modelo} está apagado (sin batería)`;
  }

  public getMensaje(): string {
    return this.mensaje;
  }

}
