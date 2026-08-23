export class Vehiculo {

  public marca: string; 
  public modelo: string;
  private patente: string;

  public constructor() {
    this.marca = "";
    this.modelo = "";
    this.patente = "";
  }

  public getPatente(formateada:boolean = false): string {
    let resultado = this.patente;
    if (formateada) {
      resultado = this.formatearPatente();
    }
    return resultado;
  }

  public setPatente(valor: string): void {
    this.patente = valor;
  }

  private formatearPatente(): string {
    const inicioPatente = 0;
    const finLetrasIniciales = 2;
    const finNumeros = 5;
    const finPatente = 7;
    const primerasLetras = this.patente.substring(inicioPatente, finLetrasIniciales);
    const numeros = this.patente.substring(finLetrasIniciales, finNumeros);
    const ultimasLetras = this.patente.substring(finNumeros, finPatente);
    return `${primerasLetras} - ${numeros} - ${ultimasLetras}`
  }
}
