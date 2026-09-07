import { ESTADO_EMPLEADO } from "./estado-empleado";
import Micro from "./micro";

/**
 * Esta clase gestiona l.....
 */
export default abstract class Empleado {

  /**
   * Niveles de visibilidad
   * public  --> significa que cualquiera puede acceder
   * private --> significa que sólo puedo acceder desde dentro del mismo objeto
   * protected --> lo vemos el martes
   */

  private jefe: Empleado;
  private estado: ESTADO_EMPLEADO;

  /**
   * Permite ...
   */
  constructor(private legajo: number, private nombreCompleto: string, private esJefe: boolean) { 
    // this.jefe = undefined as unknown as Empleado;
    this.jefe = undefined as unknown as Empleado;
    this.estado = ESTADO_EMPLEADO.ESPERANDO;
  }

  public abstract quiereSubir(m: Micro): boolean;
  // public abstract subir(): void; 

  public getLegajo() {
    return this.legajo;
  }

  public getNombreCompleto() {
    return this.nombreCompleto;
  }

  public sosJefe() {
    return this.esJefe;
  }

  public setJefe(e: Empleado) {
    this.jefe = e;
  }

  public getJefe() {
    return this.jefe;
  }

  public getEstado(): ESTADO_EMPLEADO {
    return this.estado;
  }

  public estasSentado(): boolean {
    return this.estado === ESTADO_EMPLEADO.SENTADO;
  }

  public estasParado(): boolean {
    return this.estado === ESTADO_EMPLEADO.PARADO;
  }

  public setEstado(estado: ESTADO_EMPLEADO) {
    this.estado = estado;
  }

}
