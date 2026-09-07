import { Celular } from "./celular";

export class Iphone extends Celular {

  private readonly porcentajePerdidaPorUnidad = 0.1;
  private readonly porcentajeTotal = 100;

  public constructor(numero: number) {
    super("Apple", "iPhone", numero);
  }

  // el iPhone pierde el 0,1% de la duración de la llamada en batería
  protected calcularCostoLlamada(duracion: number): number {
    return (duracion * this.porcentajePerdidaPorUnidad) / this.porcentajeTotal;
  }

}
