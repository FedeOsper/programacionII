import Empleado from "./empleado";
import Micro from "./micro";

export default class Moderado extends Empleado {

  constructor(
    legajo: number, 
    nombreCompleto: string, 
    esJefe: boolean, 
    private espaciosMinimos: number
  ) { 
    super(legajo, nombreCompleto, esJefe);
  }

  public quiereSubir(m: Micro): boolean {
    return  m.getLugaresLibresTotales() >= this.espaciosMinimos;
  }

}


