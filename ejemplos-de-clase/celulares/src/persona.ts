import { Celular } from "./celular";

export class Persona {

  private readonly decimalesCosto = 2;

  private readonly nombre: string;
  private readonly celular: Celular;

  public constructor(nombre: string, celular: Celular) {
    this.nombre = nombre;
    this.celular = celular;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public tieneCelularApagado(): boolean {
    return this.celular.estaApagado();
  }

  public llamarPorCelular(destinatario: Persona, duracion: number): void {
    const costoLlamada = this.celular.llamar(destinatario.celular, duracion);
    console.log(
      `${this.nombre} llamó a ${destinatario.nombre} durante ${duracion} segundos ` +
      `y su celular gastó ${costoLlamada.toFixed(this.decimalesCosto)} puntos de batería`,
    );
  }

}
