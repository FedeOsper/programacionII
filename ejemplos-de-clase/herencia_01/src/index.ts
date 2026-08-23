import { createInterface } from "node:readline/promises";
import { Estudiante } from "./estudiante";
import { Docente } from "./docente";
import { Persona } from "./persona";

function herencia(): void {
  const persona1: Persona = new Persona("Pepe", "Grillo");
  console.log(persona1.saludar());
  const estudiante1 = new Estudiante("Juan", "Perez");
  console.log(estudiante1.saludar());
}

function upcasting(): void {
  console.log("################## Upcasting  ######################");
  const persona1: Persona = new Estudiante("Juan", "Perez");
  const persona2: Persona = new Docente("Maria", "Perez");
  const docente1: Docente = new Docente("Alberto", "Cadisco");

  const personas: Persona[] = [];
  personas.push(persona1);
  personas.push(persona2);

  personas.push(docente1);

  for (let i = 0; i < personas.length; i++) {
    console.log(personas[i].saludar());
  }
}

function downcasting(): void {
  const persona1: Persona = new Estudiante("Juan", "Perez");
  console.log();
  console.log("################## Downcasting  ######################");
  const estudiante1: Estudiante = persona1 as Estudiante;
  console.log(`La cantidad de materias aprobadas de ${estudiante1.getNombre()} es ${estudiante1.getCantidadMateriasAprobadas()}`);
}


function downcastingConError(): void {
  // Ejemplo Downcasting con error
  console.log();
  console.log("################## Downcasting con error ######################");
  const persona3: Persona = new Persona("xx", "yy");

  const estudiante2: Estudiante = persona3 as Estudiante;

  // Este console.log arroja error ya que persona3 siempre fue una instancia de Persona y no de Estudiante
  // Para que el Downcasting funcione correctamente persona3 deberia haber sido instancia de Estudiante
  console.log(`La cantidad de materias aprobadas de ${estudiante2.getNombre()} es: ${estudiante2.getCantidadMateriasAprobadas()}`);
}


function mostrarMenu(): void {
  console.log("\n===== Ejemplos de Herencia =====");
  console.log("1) Herencia");
  console.log("2) Upcasting");
  console.log("3) Downcasting");
  console.log("4) Downcasting con error");
  console.log("0) Salir");
}

function ejecutarEjemplo(ejemplo: () => void): void {
  try {
    ejemplo();
  } catch (error) {
    console.log(`\n⚠️  La ejecución lanzó un error: ${(error as Error).message}`);
  }
}

function ejecutarOpcion(opcion: string): boolean {
  switch (opcion) {
    case "1":
      ejecutarEjemplo(herencia);
      return true;
    case "2":
      ejecutarEjemplo(upcasting);
      return true;
    case "3":
      ejecutarEjemplo(downcasting);
      return true;
    case "4":
      ejecutarEjemplo(downcastingConError);
      return true;
    case "0":
      return false;
    default:
      console.log("Opción inválida");
      return true;
  }
}

async function main(): Promise<void> {
  const lector = createInterface({ input: process.stdin, output: process.stdout });

  let continuar = true;
  while (continuar) {
    mostrarMenu();
    const opcion = await lector.question("Elegí una opción: ");
    continuar = ejecutarOpcion(opcion);
  }

  lector.close();
}


main();
