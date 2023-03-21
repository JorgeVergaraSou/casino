import { JuegoCasino } from "./juegoCasino";

export class Ruleta extends JuegoCasino{

    public girarRuleta: boolean;
    public casillero: number
   
/* ESTO SE HEREDA DE LA CLASE JUEGO CASINO */
    public constructor(nombre: string, usuarios: number, premioMaximo: number, premioMinimo: number, girarRuleta: boolean, casillero: number){
        super(nombre, usuarios, premioMaximo, premioMinimo);
        this.girarRuleta = girarRuleta;
        this.casillero = casillero;
    }

    public getInfo(): Ruleta{
        return this;
    }
}