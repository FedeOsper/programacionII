import { SensorTemperatura } from "./sensor-temperatura";
import { SistemaDeTraccion } from "./sistema-de-traccion";

export class Oruga extends SistemaDeTraccion {

  private sensorTemperatura: SensorTemperatura;

  public constructor() {
    const vidaUtilInicial = 400;
    const potenciaBase = 3;
    super(vidaUtilInicial, potenciaBase);
    this.sensorTemperatura = new SensorTemperatura();
  }

  
  public getTemperatura(): number {
    return this.sensorTemperatura.getTemperatura();
  }

}

