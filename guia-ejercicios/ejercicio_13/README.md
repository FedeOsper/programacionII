# Ejercicio 13

## Enunciado

El laboratorio Kokumo Technologies está desarrollando el prototipo de un robot explorador cuyo
sistema de tracción puede ser personalizado para que se adapte mejor al terreno.
El robot, llamado KT-2020, tiene las siguientes características:

* Número de serie: KT-2020-P
* Potencia de tracción base (PTB): 10 hp
* Tracción: cualquiera de las dos opciones desarrolladas.

Los sistemas de tracción disponibles son:

* Rueda de caucho: ideal para entornos urbanos, su uso le resta 1 hp al PTB y permite el rodado de hasta 100 km; cuando se gasta, debe reemplazarse.
* Oruga: para todo tipo de terreno, le permite avanzar hasta 400 km antes de requerir reemplazo y resta 3 hp al PTB. Incorpora sensores Meke-M0 que le permiten conocer la temperatura.

Analizar, diseñar, diagramar las relaciones e implementar el código.
Crear instancias de cada una de las clases y asignarle al robot los distintos sistemas de tracción, procurando mostrar por pantalla los siguientes datos entre las distintas asignaciones:
Número de serie, potencia de tracción final, tipo de tracción, cuanto puede avanzar y
datos sobre cualquier característica adicional que posea.

## Resumen de la implementación

El diseño modela la relación entre el robot y su tracción por **composición**: `Robot` (`src/robot.ts`) no hereda de ningún sistema de tracción, sino que **tiene un** `SistemaDeTraccion`, recibido por constructor. Esto permite intercambiar el tipo de tracción de un robot sin modificar la clase `Robot`.

`SistemaDeTraccion` (`src/sistema-de-traccion/sistema-de-traccion.ts`) es una clase **abstracta** que concentra el estado y comportamiento común a cualquier tracción: `vidaUtil`, `potencia`, y los métodos `avanzar()` (descuenta km de vida útil y devuelve cuánto pudo avanzar realmente) y `reemplazar()` (indica si la vida útil se agotó). Sobre ella se definen dos implementaciones concretas:

* `RuedaDeCaucho`: inicializa la tracción con 100 km de vida útil y 1 hp de resta de potencia.
* `Oruga`: inicializa la tracción con 400 km de vida útil y 3 hp de resta de potencia, y además **compone** un `SensorTemperatura` (`src/sistema-de-traccion/sensor-temperatura.ts`) propio, exponiendo `getTemperatura()` — una característica adicional que `RuedaDeCaucho` no tiene, ya que no todos los sistemas de tracción necesitan un sensor.

`Robot` expone `getNombre()`, `getNumeroSerie()`, `getPotenciaTraccionFinal()`, `getTipoDeTraccion()` y `avanzar()` (delegado al `SistemaDeTraccion` asignado), permitiendo mostrar por pantalla los datos pedidos por el enunciado para cada asignación de tracción.

### Estado actual: trabajo en progreso

`Robot.getTipoDeTraccion()` todavía no está terminado — el método quedó con un `return this.sistemaTraccion.` sin completar, por lo que el proyecto no compila (`tsc`) hasta que se implemente. El resto de las clases (`SistemaDeTraccion`, `RuedaDeCaucho`, `Oruga`, `SensorTemperatura`) están completas y pasan lint.
