import { Celular } from "./celular";

export class MotorolaG5 extends Celular {

  private readonly costoPorLlamada = 0.25;

  public constructor(numero: number) {
    super("Motorola", "G5", numero);
  }

  // el Motorola G5 pierde siempre la misma cantidad de batería, sin importar la duración
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- duracion no aplica al costo fijo de este modelo
  protected calcularCostoLlamada(duracion: number): number {
    return this.costoPorLlamada;
  }

}
