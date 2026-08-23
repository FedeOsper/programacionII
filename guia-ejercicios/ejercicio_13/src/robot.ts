import { Oruga } from "./sistema-de-traccion/oruga";
import { SistemaDeTraccion } from "./sistema-de-traccion/sistema-de-traccion";

export class Robot {

  
  private nombre: string;
  private numeroSerie: string;
  private potenciaBase: number;
  private sistemaTraccion: SistemaDeTraccion;

  constructor(traccion: SistemaDeTraccion, nombre?: string, numeroSerie?: string, potenciaBase?: number) {
    this.nombre = nombre ?? "KT-2020";
    this.numeroSerie = numeroSerie ?? "KT-2020-P";
    this.potenciaBase = potenciaBase ?? 10;
    this.sistemaTraccion = traccion;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getNumeroSerie(): string {
    return this.numeroSerie;
  }
  
  public getPotenciaTraccionFinal(): number {
    return this.potenciaBase;
  }

  public getTipoDeTraccion(): string {
    return this.sistemaTraccion.
  } 

  public avanzar(metros: number): number {
    return this.sistemaTraccion.avanzar(metros);
  }

}
