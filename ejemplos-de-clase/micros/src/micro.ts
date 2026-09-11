import Empleado from "./empleado";
import { ESTADO_EMPLEADO } from "./estado-empleado";

export default class Micro {

  private pasajeros: Array<Empleado>; // Empleado[]

  constructor(private lugaresSentados: number, private lugaresParados: number, private volumen: number) {
    this.pasajeros = [];
  }

  public getLugaresSentados(): number {
    return this.lugaresSentados;
  }

  public getAsientosDisponible(): number {
    const pasajerosSentados = this.pasajeros.filter((p: Empleado) => p.estasSentado());
    return this.lugaresSentados - pasajerosSentados.length;
  }

  public getLugaresParados(): number {
    return this.lugaresParados;
  }

  public getLugaresAPieDisponibles(): number {
    const pasajerosParados = this.pasajeros.filter((p: Empleado) => p.estasParado());
    return this.lugaresParados - pasajerosParados.length;
  }

  public getLugaresTotales(): number {
    return this.getLugaresParados() + this.getLugaresSentados();
  }

  public getLugaresLibresTotales(): number {
    return this.getLugaresTotales() - this.pasajeros.length;
  }

  public getVolumen(): number {
    return this.volumen;
  }
  
  public subirPasajero(pasajero: Empleado): void {

    if (this.getLugaresLibresTotales() <= 0) {
      throw new Error("No se puede subir el pasajero: no hay lugar en el micro");
    }

    if (!pasajero.quiereSubir(this)) {
      throw new Error("No se puede subir el pasajero: el pasajero no quiere subir");
    }

    if (this.getAsientosDisponible() > 0) {
      pasajero.setEstado(ESTADO_EMPLEADO.SENTADO);
    }
    else {
      pasajero.setEstado(ESTADO_EMPLEADO.PARADO);
    }
    this.pasajeros.push(pasajero);
  }

}
