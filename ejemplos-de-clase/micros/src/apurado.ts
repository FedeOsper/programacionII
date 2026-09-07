import Empleado from "./empleado";
import Micro from "./micro";

export default class Apurado extends Empleado {

  public quiereSubir(m: Micro): boolean {
    return true;
  }

}
