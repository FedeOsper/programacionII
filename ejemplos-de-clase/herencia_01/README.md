# Herencia 01

## Objetivo

A diferencia de los ejercicios de `guia-ejercicios`, este proyecto es un ejemplo de clase: `src/index.ts` no tiene un enunciado formal en comentarios. El objetivo, tal como se planteó, es introducir a los estudiantes en el concepto de **herencia** y jerarquía de clases, y luego en los conceptos de **upcasting** y **downcasting**.

## Resumen de la implementación

`Persona` (`src/persona.ts`) es la clase base, con atributos `protected` `nombre` y `apellido` (accesibles por las subclases, no desde afuera), dos sobrecargas de constructor (sin parámetros, o con nombre y apellido) resueltas en una única implementación con parámetros opcionales, y un método `saludar()` pensado para ser redefinido.

`Estudiante` y `Docente` (`src/estudiante.ts`, `src/docente.ts`) heredan de `Persona` y **redefinen** `saludar()` para devolver un mensaje distinto según el rol — el ejemplo clásico de polimorfismo por herencia. Cada una agrega además un método propio con un valor de retorno fijo a modo de placeholder (`getCantidadMateriasAprobadas()` / `getCantidadDeCursosAsignados()`), pendiente de reemplazarse por datos reales.

`src/index.ts` está organizado en 4 funciones que aíslan cada concepto:

* `herencia()`: instancia una `Persona` y una `Estudiante`, mostrando que cada una saluda distinto.
* `upcasting()`: guarda instancias de `Estudiante` y `Docente` en un arreglo tipado `Persona[]` y recorre el arreglo llamando `saludar()` de forma polimórfica.
* `downcasting()`: convierte (`as`) una referencia `Persona` que en tiempo de ejecución **sí** es una `Estudiante`, y accede a `getCantidadMateriasAprobadas()`, un método que no existe en `Persona`.
* `downcastingConError()`: convierte una referencia `Persona` que en tiempo de ejecución **no** es una `Estudiante`, para mostrar que `as` es solo una afirmación en tiempo de compilación — TypeScript no la verifica en tiempo de ejecución, así que el `TypeError` ocurre recién al invocar el método inexistente en el objeto real.

Para que los estudiantes puedan elegir y comparar los ejemplos sin reiniciar el programa, `main()` implementa un menú interactivo con el módulo built-in de Node `node:readline/promises` (sin dependencias externas): muestra las opciones, lee la elección con `await lector.question(...)` y vuelve a mostrar el menú hasta que se elige salir. Cada ejemplo se ejecuta a través de `ejecutarEjemplo()`, que envuelve la llamada en un `try/catch` para que el error intencional de `downcastingConError()` se muestre en pantalla sin cerrar el menú.

## Cómo ejecutar los ejemplos

```bash
user@host:~$ npm run build
user@host:~$ npm start
```

Con el programa corriendo, ingresar el número de la opción deseada (`1`-`4`) o `0` para salir.
