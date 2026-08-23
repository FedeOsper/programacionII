# Ejercicio 01

## Enunciado

Crear una clase Persona que tenga los atributos públicos nombre y apellido.
Crear una instancia y asignarle valores.
Mostrar por pantalla los valores asignados.

## Resumen de la implementación

Se creó la clase `Persona` (`src/persona.ts`) con dos atributos públicos, `nombre` y `apellido`, inicializados en el constructor con cadenas vacías. Al ser públicos, se puede acceder y asignarles valores directamente desde fuera de la clase, sin necesidad de métodos getter/setter.

En `src/index.ts` se crean dos instancias de `Persona`, se les asignan valores directamente sobre sus atributos públicos y se muestra por consola el nombre completo de cada una. Es el ejercicio introductorio a clases y objetos: no aplica encapsulamiento todavía (eso se introduce en el ejercicio siguiente), el foco está en la sintaxis básica de declarar una clase, instanciarla y acceder a sus atributos.
