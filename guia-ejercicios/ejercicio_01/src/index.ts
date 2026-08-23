import { Persona } from "./persona";


/*
 * Crear una clase Persona que tenga los atributos públicos nombre y apellido.
 * Crear una instancia y asignarle valores.
 * Mostrar por pantalla los valores asignados.
 */

// let --> cuando el valor pueda cambiar 
// const --> cuando el valor no cambie 
const persona1:Persona = new Persona();

persona1.apellido = "grillo";
persona1.nombre = "pepe";

const persona2:Persona = new Persona();
persona2.apellido = "lalala";
persona2.nombre = "xxxxxx";

console.log("##############################");
console.log(`Nombre Completo: ${persona1.nombre} ${persona1.apellido}`);
console.log("##############################");


persona2.apellido = "mouse";
persona2.nombre = "mickey";
console.log("##############################");
console.log(`Nombre Completo: ${persona2.nombre} ${persona2.apellido}`);
console.log("##############################");

