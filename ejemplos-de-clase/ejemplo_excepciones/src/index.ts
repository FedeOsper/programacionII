import { Calculadora } from "./calculadora";
import { ErrorDivision } from "./error-division";

function main(): void {

  try {
    const dividendo = 2;
    const divisor = 2;
    const cociente = Calculadora.dividir(dividendo, divisor);
    console.log(`Èl cociente entre ${dividendo} y ${divisor}  es: ${cociente} `);
  }
  catch(error) {
    // console.log(`Hubo un error en la operación. Detalle: ${error.message}`);
    if (error instanceof ErrorDivision) {
      console.log(error.getMensaje());
    }
    else if (error instanceof Error) {
      console.log("Error inesperado");
    }
  }
  finally {
    console.log("Finalmente se ejecuta esto!!");
  }
}


main();
