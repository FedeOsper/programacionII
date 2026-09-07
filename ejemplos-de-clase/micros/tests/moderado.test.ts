import Micro from "../src/micro";
import Moderado from "../src/moderado";


describe("Tests de la clase Moderado", () => {

  let instance: Moderado;

  beforeEach(() => {
    instance = new Moderado(123, "Alberto Cadisco", false, 5);
  });

  afterEach(() => {});

  it("Debe ser una instancia de la clase Moderado", () => {
    expect(instance).toBeInstanceOf(Moderado);
  });

  it("Verifica que el empleado quiera subir al micro", () => {
    const micro: Micro = { 
      getLugaresLibresTotales: jest.fn().mockReturnValue(5),
    } as any;

    const resultado = instance.quiereSubir(micro);
    expect(resultado).toBeTruthy();
  });

  it("Verifica que el empleado no quiera subir al micro si hay menos lugares de los esperados", () => {
    const micro: Micro = { 
      getLugaresLibresTotales: jest.fn().mockReturnValue(4),
    } as any;

    const resultado = instance.quiereSubir(micro);
    expect(resultado).toBeFalsy();
  });
})

