import { SensorTemperatura } from "./sensor-temperatura";
import { SistemaDeTraccion } from "./sistema-de-traccion";

export class Oruga extends SistemaDeTraccion {

  private nombre: string;
  private sensorTemperatura: SensorTemperatura;

  public constructor() {
    const vidaUtilInicial = 400;
    const potenciaBase = 3;
    super(vidaUtilInicial, potenciaBase);
    this.nombre = "Rueda XX";

    // ESTO NO ES CORRECTO 👇!!
    this.sensorTemperatura = new SensorTemperatura();
  }

  protected doGetNombre(): string {
    return `Oruga modelo: ${this.nombre}`;
  }
  
  public getTemperatura(): number {
    return this.sensorTemperatura.getTemperatura();
  }

}

