import { Persona } from "./persona";

export class Docente extends Persona {

  private email: string;

  public constructor(pNombre: string, pApellido: string) {
    super(pNombre, pApellido);
    this.email = "";
  }

  // redefino el metodo saludar
  public saludar(): string {
    // return `Hola yo soy ${this.nombre} ${this.apellido} y soy un Estudiante`;
    return `Hola yo soy ${this.getNombre()} ${this.apellido} y soy un Docente`;

    // const saludoPersona = super.saludar();
    // return `${saludoPersona} y soy un Estudiante`;
  }

  // eslint-disable-next-line @typescript-eslint/class-methods-use-this -- placeholder
  public getCantidadDeCursosAsignados(): number {
    const cantidadCursos = 20;
    return cantidadCursos;
  }

}
