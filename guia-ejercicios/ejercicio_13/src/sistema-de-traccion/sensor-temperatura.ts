export class SensorTemperatura {
  
  private nombre: string;

  public constructor() {
    this.nombre = "Meke-M0";
  }

  public getNombre(): string {
    return this.nombre;
  }

  // eslint-disable-next-line @typescript-eslint/class-methods-use-this -- valor simulado
  public getTemperatura(): number {
    const rangoTemperatura = 100;
    return Math.random() * rangoTemperatura;
  }

}
