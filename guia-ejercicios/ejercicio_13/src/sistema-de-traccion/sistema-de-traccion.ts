export abstract class SistemaDeTraccion {

  private static readonly vidaUtilMinima = 0;

  private vidaUtil: number;
  private potencia: number;

  public constructor(vidaUtil: number, potencia: number) {
    this.vidaUtil = vidaUtil;
    this.potencia = potencia;
  }

  public getPotencia(): number {
    return this.potencia;
  }

  public getNombre(): string {
    return `Soy un sistema de tracción de tipo ${this.doGetNombre()}`; 
  }

  public getVidaUtil(): number {
    return this.vidaUtil;
  }

  public avanzar(metros: number): number {
    this.vidaUtil = this.vidaUtil - metros;
    let avance = metros;
    if (this.vidaUtil < SistemaDeTraccion.vidaUtilMinima) {
      avance = Math.abs(metros - Math.abs(this.vidaUtil));
      this.vidaUtil = SistemaDeTraccion.vidaUtilMinima;
    }
    return avance;
  }

  public debeReemplazar(): boolean {
    return this.vidaUtil === SistemaDeTraccion.vidaUtilMinima;
  }

  protected abstract doGetNombre(): string;
}

