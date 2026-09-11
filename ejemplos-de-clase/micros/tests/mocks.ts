import { MockProxy, mock } from 'jest-mock-extended';
import Empleado from "../src/empleado";

export const empleadoMock: Empleado = {
  quiereSubir: jest.fn(),
  setEstado: jest.fn().mockReturnValue(undefined),
} as any;

export const empleadoCompletoMock: MockProxy<Empleado> = mock<Empleado>();

