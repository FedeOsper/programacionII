import { SistemaDeTraccion } from "./sistema-de-traccion";

export class RuedaDeCaucho extends SistemaDeTraccion {

  public constructor() {
    const vidaUtilInicial = 100;
    const potenciaBase = 1;
    super(vidaUtilInicial, potenciaBase);
  }

}
