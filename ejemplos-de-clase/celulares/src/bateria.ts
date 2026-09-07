export class Bateria {

  private static readonly capacidadMaximaDefault = 5;
  private static readonly cargaMinima = 0;

  private readonly capacidadMaxima: number;
  private puntosDeCarga: number;

  public constructor(capacidadMaxima: number = Bateria.capacidadMaximaDefault) {
    this.capacidadMaxima = capacidadMaxima;
    this.puntosDeCarga = capacidadMaxima;
  }

  public getEstado(): number {
    return this.puntosDeCarga;
  }

  public getCapacidadMaxima(): number {
    return this.capacidadMaxima;
  }

  // puntos puede ser negativo para representar el desgaste de una llamada
  public cargar(puntos: number): void {
    const cargaDeseada = this.puntosDeCarga + puntos;
    this.puntosDeCarga = Math.min(this.capacidadMaxima, Math.max(Bateria.cargaMinima, cargaDeseada));
  }

}
