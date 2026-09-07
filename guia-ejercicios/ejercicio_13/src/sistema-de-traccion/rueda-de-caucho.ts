import { SistemaDeTraccion } from "./sistema-de-traccion";

export class RuedaDeCaucho extends SistemaDeTraccion {
  private nombre: string;

  public constructor() {
    const vidaUtilInicial = 100;
    const potenciaBase = 1;
    super(vidaUtilInicial, potenciaBase);
    this.nombre = "Rueda XX";
  }

  protected doGetNombre(): string {
    return `Rueda de Caucho modelo: ${this.nombre}`;
  }
}
