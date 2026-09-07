import Empleado from "./empleado";
import Micro from "./micro";

export default class Obsecuente extends Empleado {

  constructor(
    legajo: number, 
    nombreCompleto: string, 
    esJefe: boolean, 
    jefe: Empleado
  ) { 
    super(legajo, nombreCompleto, esJefe);
    this.setJefe(jefe);
  }

  public quiereSubir(m: Micro): boolean {
    const jefe = this.getJefe();
    if (!jefe) {
      throw new Error("Falta definir el jefe");
    }

    return this.getJefe().quiereSubir(m);
  }

}



