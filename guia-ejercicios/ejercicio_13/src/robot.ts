import { SistemaDeTraccion } from "./sistema-de-traccion/sistema-de-traccion";

const POTENCIA_BASE_DEFAULT = 10;

export class Robot {
  
  private nombre: string;
  private numeroSerie: string;
  private potenciaBase: number;
  private sistemaTraccion: SistemaDeTraccion;

  public constructor(traccion: SistemaDeTraccion, nombre?: string, numeroSerie?: string, potenciaBase?: number) {
    this.nombre = nombre ?? "KT-2020";
    this.numeroSerie = numeroSerie ?? "KT-2020-P";
    this.potenciaBase = potenciaBase ?? POTENCIA_BASE_DEFAULT;
    this.sistemaTraccion = traccion;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getNumeroSerie(): string {
    return this.numeroSerie;
  }
  
  public getPotenciaTraccionFinal(): number {
    return this.potenciaBase - this.sistemaTraccion.getPotencia();
  }

  public getTipoDeTraccion(): string {
    return this.sistemaTraccion.getNombre();
  } 

  public avanzar(metros: number): number {
    return this.sistemaTraccion.avanzar(metros);
  }

  public getVidaUtil(): number {
    return this.sistemaTraccion.getVidaUtil();
  }

}
