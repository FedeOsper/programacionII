import { Vehiculo } from "./vehiculo";


/*
 * Crear una clase Vehiculo que tenga los atributos públicos marca, modelo y un atributo privado
 * patente.
 * Crear una instancia y asignarle valores; notar que el atributo privado no está disponible
 * para la asignación de valores.
 * Mostrar por pantalla los valores asignados.
 */


const auto: Vehiculo = new Vehiculo();

auto.marca = "2222";
auto.modelo = "Z4";

auto.setPatente("aa123zz");

console.log(`Datos del auto: ${auto.marca} - ${auto.modelo}`);
console.log(`Patente del auto: ${auto.getPatente()}`);

