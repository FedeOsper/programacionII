import Empleado from "./empleado";
import Micro from "./micro";

export default class Claustrofobico extends Empleado {

  public quiereSubir(m: Micro): boolean {
    return m.getVolumen() > 120;
  }

}

