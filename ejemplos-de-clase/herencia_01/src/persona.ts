export class Persona {

  protected nombre: string; 
  protected apellido: string;

  public constructor()
  public constructor(pNombre: string, pApellido: string)
  public constructor(pNombre?: string, pApellido?: string) {
    this.nombre = pNombre ?? "";
    this.apellido = pApellido ?? "";
  } 

  public getNombre(): string {
    return this.nombre;
  }

  public getApellido(): string {
    return this.apellido;
  }

  public saludar(): string {
    return `Hola yo soy ${this.nombre} ${this.apellido}`;
  }

}


