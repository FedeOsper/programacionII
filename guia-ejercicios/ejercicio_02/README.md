# Ejercicio 02

## Enunciado

Crear una clase Vehiculo que tenga los atributos públicos marca, modelo y un atributo privado patente.
Crear una instancia y asignarle valores; notar que el atributo privado no está disponible para la asignación de valores.
Mostrar por pantalla los valores asignados.

## Resumen de la implementación

Se creó la clase `Vehiculo` (`src/vehiculo.ts`) con dos atributos públicos, `marca` y `modelo`, y un atributo privado, `patente`. A diferencia del ejercicio anterior, `patente` solo es accesible desde fuera de la clase a través de los métodos `getPatente()` y `setPatente()`, introduciendo el concepto de **encapsulamiento: el estado interno se protege y se expone únicamente a través de una interfaz controlada.**



`getPatente()` admite un parámetro opcional `formateada` que, si es `true`, devuelve la patente separada en tres bloques (letras - números - letras) usando el método privado `formatearPatente()`, un helper interno no accesible desde fuera de la clase.

Esto no formaba parte del ejercicio, fue agregado en clase para ver el comportamiento de métodos privados.



En `src/index.ts` se crea una instancia de `Vehiculo`, se asignan `marca` y `modelo` directamente (por ser públicos), y la `patente` se asigna mediante `setPatente()` (por ser privada). Luego se muestran por consola los datos del vehículo y la patente, tanto en su formato original como formateado.
