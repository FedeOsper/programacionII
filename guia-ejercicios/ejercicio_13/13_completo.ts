class SensorTemperatura {

    private nombre: string;

    public constructor() {
        this.nombre = "Meke-M0";
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getTemperatura(): number {
        const rangoTemperatura = 100;
        return Math.random() * rangoTemperatura;
    }
}

abstract class SistemaDeTraccion {

    private static readonly vidaUtilMinima = 0;

    private vidaUtil: number;
    private potencia: number;

    public constructor(vidaUtil: number, potencia: number) {
        this.vidaUtil = vidaUtil;
        this.potencia = potencia;
    }

    public getPotencia(): number {
        return this.potencia;
    }

    public getNombre(): string {
        return `Soy un sistema de tracción de tipo ${this.doGetNombre()}`;
    }

    public getVidaUtil(): number {
        return this.vidaUtil;
    }

    public avanzar(metros: number): number {

        this.vidaUtil = this.vidaUtil - metros;

        let avance = metros;

        if (this.vidaUtil < SistemaDeTraccion.vidaUtilMinima) {

            avance = Math.abs(
                metros - Math.abs(this.vidaUtil)
            );

            this.vidaUtil =
                SistemaDeTraccion.vidaUtilMinima;
        }

        return avance;
    }

    public debeReemplazar(): boolean {
        return this.vidaUtil === SistemaDeTraccion.vidaUtilMinima;
    }

    protected abstract doGetNombre(): string;
}

class RuedaDeCaucho extends SistemaDeTraccion {

    private nombre: string;

    public constructor() {

        const vidaUtilInicial = 100;
        const potenciaBase = 1;

        super(vidaUtilInicial, potenciaBase);

        this.nombre = "Rueda XX";
    }

    protected doGetNombre(): string {
        return `Rueda de Caucho modelo: ${this.nombre}`;
    }
}

class Oruga extends SistemaDeTraccion {

    private nombre: string;
    private sensorTemperatura: SensorTemperatura;

    public constructor() {

        const vidaUtilInicial = 400;
        const potenciaBase = 3;

        super(vidaUtilInicial, potenciaBase);

        this.nombre = "Oruga XX";

        this.sensorTemperatura =
            new SensorTemperatura();
    }

    protected doGetNombre(): string {
        return `Oruga modelo: ${this.nombre}`;
    }

    public getTemperatura(): number {
        return this.sensorTemperatura.getTemperatura();
    }
}

const POTENCIA_BASE_DEFAULT = 10;

class Robot {

    private nombre: string;
    private numeroSerie: string;
    private potenciaBase: number;
    private sistemaTraccion: SistemaDeTraccion;

    public constructor(
        traccion: SistemaDeTraccion,
        nombre?: string,
        numeroSerie?: string,
        potenciaBase?: number
    ) {

        this.nombre = nombre ?? "KT-2020";
        this.numeroSerie = numeroSerie ?? "KT-2020-P";
        this.potenciaBase =
            potenciaBase ?? POTENCIA_BASE_DEFAULT;

        this.sistemaTraccion = traccion;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getNumeroSerie(): string {
        return this.numeroSerie;
    }

    public getPotenciaTraccionFinal(): number {
        return this.potenciaBase -
               this.sistemaTraccion.getPotencia();
    }

    public getTipoDeTraccion(): string {
        return this.sistemaTraccion.getNombre();
    }

    public avanzar(metros: number): number {
        return this.sistemaTraccion.avanzar(metros);
    }

    public getVidaUtil(): number {
        return this.sistemaTraccion.getVidaUtil();
    }

    public getSistemaTraccion(): SistemaDeTraccion {
        return this.sistemaTraccion;
    }
}

function mostrarDatos(robot: Robot): void {

    console.log("----------------------------------");
    console.log("Nombre:", robot.getNombre());
    console.log("Número de serie:", robot.getNumeroSerie());
    console.log("Potencia final:", robot.getPotenciaTraccionFinal(), "hp");
    console.log("Tipo de tracción:", robot.getTipoDeTraccion());
    console.log("Puede avanzar:", robot.getVidaUtil(), "km");

    const traccion = robot.getSistemaTraccion();

    if (traccion instanceof Oruga) {

        console.log(
            "Sensor de temperatura:",
            traccion.getTemperatura().toFixed(2),
            "°C"
        );
    }

    console.log("----------------------------------");
    console.log();
}

function main(): void {

    const rueda = new RuedaDeCaucho();
    const robotConRueda = new Robot(rueda);

    console.log("ROBOT CON RUEDA DE CAUCHO");
    mostrarDatos(robotConRueda);

    const oruga = new Oruga();
    const robotConOruga = new Robot(oruga);

    console.log("ROBOT CON ORUGA");
    mostrarDatos(robotConOruga);
}

main();