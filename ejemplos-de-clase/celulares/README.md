# Celulares

## Enunciado

Implementar un aplicación donde se represente a personas que hablan entre sí por celulares.
Juliana tiene un Motorola G5, y Catalina tiene un iPhone.
El Motorola G5 pierde 0,25 "puntos" de batería por cada llamada, y el iPhone pierde 0,1% de la
duración de cada llamada en batería. Ambos celulares tienen 5 "puntos" de batería como
máximo.
Implementar a Juliana, Catalina, el Motorola G5 de Juliana y el iPhone de Catalina y hacer una
aplicación de consola en donde Juliana y Catalina se hagan llamadas telefónicas de distintas
duraciones.
Se pide al finalizar cada llamada:
1. Conocer la cantidad de batería de cada celular.
2. Saber si un celular está apagado (si está sin batería).
3. Recargar un celular (que vuelva a tener su batería completa).
4. Saber si Juliana tiene el celular apagado; saber si Catalina tiene el celular apagado.

## Resumen de la implementación

- `Persona` (composición: tiene un `Celular`) puede llamar a otra `Persona` a través de su celular, indicando la duración de la llamada.
- `Celular` es una clase abstracta que centraliza el comportamiento común (batería, llamar, recargar, etc.) y delega el cálculo del costo de cada llamada en el método abstracto `calcularCostoLlamada(duracion)`.
- `MotorolaG5` y `Iphone` heredan de `Celular` y sobrescriben `calcularCostoLlamada` con su propia fórmula: costo fijo de 0.25 puntos para el Motorola, y 0.1% de la duración para el iPhone.
- `Celular` compone una `Bateria`, con una capacidad máxima de 5 puntos por defecto.
- Si se intenta llamar con el celular apagado (batería en 0), se lanza la excepción `ErrorTelefonoApagado`.

## Cómo ejecutar los ejemplos

```bash
user@host:~$ npm run build
user@host:~$ npm start
```

