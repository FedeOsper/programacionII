import { ErrorDivision } from "./error-division";

export class Calculadora {

  private static readonly divisorNoPermitido = 0;

  public static dividir(dividendo: number, divisor: number): number {
    if (divisor === Calculadora.divisorNoPermitido) {
      throw new ErrorDivision();
    }

    return dividendo / divisor;
  }

}
