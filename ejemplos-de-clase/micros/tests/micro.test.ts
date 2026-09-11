import Micro from "../src/micro";
import Empleado from "../src/empleado";
import { empleadoMock, empleadoCompletoMock } from "./mocks";

describe("Clase Micro", () => {

  let instance: Micro;

  beforeEach(() => {
    instance = new Micro(4, 4, 100);
  });

  afterEach(() => {});


  test("Verifico que sea instancia de Micro", () => {
    expect(instance).toBeInstanceOf(Micro);
    expect(instance["pasajeros"].length).toEqual(0);
  });


  test("Micro esta lleno. El pasajero no se puede subir", () => {
    const micro: Micro = new Micro(1, 0, 100);

    empleadoMock.quiereSubir = jest.fn().mockReturnValue([]);
    micro["pasajeros"].push(empleadoMock);

    expect(() => micro.subirPasajero(empleadoMock)).toThrowError("No se puede subir el pasajero: no hay lugar en el micro");
  })

  test("Micro esta lleno. El pasajero no se puede subir - reloaded", () => {
    const micro: Micro = new Micro(1, 0, 100);

    // empleadoMock.quiereSubir = jest.fn().mockReturnValue(true);
    micro.subirPasajero(empleadoMock);

    expect(() => micro.subirPasajero(empleadoMock)).toThrowError("No se puede subir el pasajero: no hay lugar en el micro");
    expect(empleadoMock.quiereSubir).toHaveBeenNthCalledWith(1,micro);
  })

  test("El pasajero no se quiere subir", () => {
  
    // empleadoMock.quiereSubir = jest.fn().mockReturnValue(false);
    empleadoCompletoMock.quiereSubir.mockReturnValue(false);

    expect(() => instance.subirPasajero(empleadoCompletoMock)).toThrowError("No se puede subir el pasajero: el pasajero no quiere subir");
    expect(instance["pasajeros"].length).toEqual(0);
  })
  
})
