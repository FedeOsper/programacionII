import Apurado from "../src/apurado";
import Micro from "../src/micro";


describe("Tests de la clase Apurado", () => {

  let instance: Apurado;

  beforeEach(() => {
    instance = new Apurado(123, "Alberto Cadisco", false);
  });

  afterEach(() => {});

  it("Debe ser una instancia de la clase Apurado", () => {
    expect(instance).toBeInstanceOf(Apurado);
  });


  it("Verifica que el empleado quiera subir al micro", () => {

    // MOCK OBJECT

    // const micro = new Micro(10, 10, 100);

    const micro: Micro = { } as Micro;
    const resultado = instance.quiereSubir(micro);
    expect(resultado).toBeTruthy();
  });

})
