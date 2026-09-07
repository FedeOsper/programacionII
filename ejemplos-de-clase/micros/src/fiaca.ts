import Empleado from "./empleado";
import Micro from "./micro";

export default class Fiaca extends Empleado {

  public quiereSubir(m: Micro): boolean {
    return m.getAsientosDisponible() > 0;
  }

}

