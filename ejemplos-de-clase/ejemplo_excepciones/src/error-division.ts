export class ErrorDivision extends Error {

  private readonly mensaje = "El divisor no puede ser cero";

  public getMensaje(): string {
   return this.mensaje;
  }

}
