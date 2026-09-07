import { Bateria } from "./bateria";
import { ErrorTelefonoApagado } from "./error-telefono-apagado";

export abstract class Celular {

  private static readonly porcentajeTotal = 100;
  private static readonly sinCarga = 0;

  private readonly marca: string;
  private readonly modelo: string;
  private readonly numero: number;
  private readonly bateria: Bateria;

  protected constructor(marca: string, modelo: string, numero: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.numero = numero;
    this.bateria = new Bateria();
  }

  public getMarca(): string {
    return this.marca;
  }

  public getModelo(): string {
    return this.modelo;
  }

  public getNumero(): number {
    return this.numero;
  }

  public llamar(destino: Celular, duracion: number): number {
    if (this.estaApagado()) {
      throw new ErrorTelefonoApagado(this.modelo);
    }
    if (destino.estaApagado()) {
      throw new ErrorTelefonoApagado(destino.modelo);
    }

    const costoLlamada = this.calcularCostoLlamada(duracion);
    this.bateria.cargar(-costoLlamada);
    return costoLlamada;
  }

  public getCargaBateria(): number {
    return this.bateria.getEstado();
  }

  public getCargaBateriaPorcentaje(): number {
    return (this.bateria.getEstado() / this.bateria.getCapacidadMaxima()) * Celular.porcentajeTotal;
  }

  public estaApagado(): boolean {
    return this.bateria.getEstado() <= Celular.sinCarga;
  }

  public recargar(): void {
    this.bateria.cargar(this.bateria.getCapacidadMaxima());
  }

  protected abstract calcularCostoLlamada(duracion: number): number;

}
