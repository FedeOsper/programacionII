import { Persona } from "./persona";
import { MotorolaG5 } from "./motorola-g5";
import { Iphone } from "./iphone";
import { Celular } from "./celular";
import { ErrorTelefonoApagado } from "./error-telefono-apagado";

const DECIMALES_PUNTOS = 2;
const DECIMALES_PORCENTAJE = 1;
const NUMERO_JULIANA = 1122334455;
const NUMERO_CATALINA = 1166778899;

function realizarLlamada(llamante: Persona, receptor: Persona, duracion: number): void {
  try {
    llamante.llamarPorCelular(receptor, duracion);
  }
  catch (error) {
    if (error instanceof ErrorTelefonoApagado) {
      console.log(error.getMensaje());
    }
    else if (error instanceof Error) {
      console.log("Ocurrió un error inesperado durante la llamada");
    }
  }
}

function agotarBateria(emisor: Persona, receptor: Persona, duracion: number, repeticiones: number): void {
  const incremento = 1;
  for (let intento = 0; intento < repeticiones; intento += incremento) {
    realizarLlamada(emisor, receptor, duracion);
  }
}

function mostrarEstadoCelular(nombrePersona: string, celular: Celular): void {
  const estadoApagado = celular.estaApagado() ? " [APAGADO]" : "";
  const puntos = celular.getCargaBateria().toFixed(DECIMALES_PUNTOS);
  const porcentaje = celular.getCargaBateriaPorcentaje().toFixed(DECIMALES_PORCENTAJE);
  console.log(`  ${nombrePersona} (${celular.getMarca()} ${celular.getModelo()}): ${puntos} puntos (${porcentaje}%)${estadoApagado}`);
}

function mostrarResumen(juliana: Persona, catalina: Persona, celularJuliana: Celular, celularCatalina: Celular): void {
  console.log("Estado de las baterías:");
  mostrarEstadoCelular(juliana.getNombre(), celularJuliana);
  mostrarEstadoCelular(catalina.getNombre(), celularCatalina);
  console.log(`  ¿Juliana tiene el celular apagado? ${juliana.tieneCelularApagado() ? "Sí" : "No"}`);
  console.log(`  ¿Catalina tiene el celular apagado? ${catalina.tieneCelularApagado() ? "Sí" : "No"}`);
  console.log();
}

function main(): void {
  const celularJuliana = new MotorolaG5(NUMERO_JULIANA);
  const celularCatalina = new Iphone(NUMERO_CATALINA);

  const juliana = new Persona("Juliana", celularJuliana);
  const catalina = new Persona("Catalina", celularCatalina);

  const duracionBreve = 120;
  const duracionMedia = 600;
  const duracionLarga = 900;
  const duracionExtensa = 1800;

  realizarLlamada(juliana, catalina, duracionBreve);
  mostrarResumen(juliana, catalina, celularJuliana, celularCatalina);

  realizarLlamada(catalina, juliana, duracionMedia);
  mostrarResumen(juliana, catalina, celularJuliana, celularCatalina);

  realizarLlamada(juliana, catalina, duracionLarga);
  mostrarResumen(juliana, catalina, celularJuliana, celularCatalina);

  realizarLlamada(catalina, juliana, duracionExtensa);
  mostrarResumen(juliana, catalina, celularJuliana, celularCatalina);

  console.log("--- Agotamos la batería de Juliana a propósito ---\n");
  const repeticionesParaAgotar = 20;
  agotarBateria(juliana, catalina, duracionBreve, repeticionesParaAgotar);
  mostrarResumen(juliana, catalina, celularJuliana, celularCatalina);

  console.log("--- Recargando ambos celulares ---\n");
  celularJuliana.recargar();
  celularCatalina.recargar();
  mostrarResumen(juliana, catalina, celularJuliana, celularCatalina);
}

main();
